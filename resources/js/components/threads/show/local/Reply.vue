<template>
  <div :id="'reply-' + id" class="flex my-2 pl-2">
    <div class="flex mr-2">1</div>
    <div class="flex flex-1 mr-2">
      <div class="flex flex-col w-full">
        <div class="flex items-center mb-2">
          <a :href="'/profiles/' + reply.owner.name">
            <h4 class="font-bold text-l cursor-pointer hover:underline">
              {{ reply.owner.name }}
            </h4>
          </a>
          <p class="text-xs text-gray-500 ml-2 flex-1">
            {{ reply.created_at }}
          </p>
        </div>
        <p class="text-sm text-gray-700 mb-2" v-html="body"></p>

        <div class="flex flex-row w-full" v-show="signedIn">
          <favourite :reply="reply" v-show="!displayForms"> </favourite>

          <button
            class="text-gray-600 hover:bg-gray-100 mr-1 p-1"
            @click.prevent="destroy()"
            v-if="!displayForms"
            v-show="usersOwnReply"
          >
            Sil
          </button>

          <reply-to-user-form
            @created="created"
            @changeDisplay="toggle()"
            :reply="reply"
            v-show="!usersOwnReply"
            :displayForms="displayForms"
          ></reply-to-user-form>

          <update-reply-form
            @updated="updated"
            @changeDisplay="toggle()"
            :reply="reply"
            :displayForms="displayForms"
            v-show="usersOwnReply"
          ></update-reply-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "../../../dependencies/form.js";
import Favourite from "./Favourite.vue";
import ReplyToUserForm from "./ReplyToUserForm.vue";
import UpdateReplyForm from "./UpdateReplyForm.vue";
export default {
  props: ["reply"],
  components: {
    Favourite,
    ReplyToUserForm,
    UpdateReplyForm,
  },
  data() {
    return {
      body: this.reply.body,
      originalReply: "",
      displayForms: false,
      usersOwnReply: false,
      id: this.reply.id,
    };
  },
  computed: {
    signedIn() {
      return window.App.signedIn;
    },
  },
  created() {
    this.originalReply = this.reply;
    this.usersOwnReply = window.App.user.name == this.reply.owner.name;
  },
  methods: {
    destroy() {
      axios
        .post("/replies/" + this.reply.id, { _method: "delete" })
        .then(function (response) {
          flash("Yorumunuz Silindi");
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$emit("deleted", this.id);
    },
    toggle() {
      this.displayForms = !this.displayForms;
    },
    updated(body) {
      this.body = body;
      this.toggle();
    },
    created(response) {
      this.$emit("created", response);
      this.toggle();
    },
  },
};
</script>

