<template>
  <div :id="'reply-' + id" class="flex my-2 pl-2">
    <div class="flex mr-2 p-2">1</div>
    <div class="flex flex-1 mr-2 p-2">
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

        <div class="flex flex-row w-full" v-show="this.$signedIn">
          <favourite :reply="reply" v-show="!displayForms"> </favourite>

          <button
            class="text-gray-600 hover:bg-gray-100 mr-1 p-1"
            @click.prevent="destroy()"
            v-if="!displayForms"
            v-show="usersOwnReply"
          >
            Sil
          </button>
          <div
            class="text-gray-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer"
            v-show="!$parent.displayForm && !locked"
            @click.prevent="$parent.displayForm = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <p>Yanıtla</p>
          </div>

          <div class="flex flex-row w-full">
            <div
              class="text-gray-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer"
              v-show="! $parent.displayForm && usersOwnReply && !locked"
              @click.prevent="updateRequest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <p>
                Düzenle
              </p>
            </div>
          </div>

          <best-reply-button
            :isBest="changeBest"
            v-if="!displayForms"
            @markAsBest="markAsBest"
            v-show="this.$authorize('updateThread', reply.thread)"
          ></best-reply-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "../../../dependencies/form.js";
import Favourite from "./Favourite.vue";
import BestReplyButton from "./BestReplyButton.vue";
export default {
  props: ["reply", "bestreply"],
  components: {
    Favourite,
    BestReplyButton,
  },
  data() {
    return {
      body: this.reply.body,
      originalReply: "",
      displayForms: false,
      usersOwnReply: false,
      id: this.reply.id,
      locked:this.reply.thread.locked
    };
  },
  computed: {
    changeBest() {
      if (this.bestreply) {
        return this.reply.id == this.bestreply.id;
      }
      return false;
    },
  },
  created() {
    this.originalReply = this.reply;
    this.usersOwnReply = this.$authorize("updateReply", this.reply);
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
    markAsBest() {
      if (!this.changeBest) {
        axios
          .post("/best-reply/" + this.reply.id)
          .then(flash("En iyi yanıt seçildi"));
        window.markAsBest(this.reply);
      } else {
        axios
          .delete("/best-reply/" + this.reply.id)
          .then(flash("İşaret kaldırıldı", "error"));
        window.deleteMarkAsBest(this.reply);
      }
    },
    updateRequest () {
      this.$emit('updateRequest', this.reply)
    }
  },
};
</script>

