<template>
  <div :id="'reply-' + id" class="flex my-2 pl-2 bg-white rounded-lg mx-1">
    <avatar :item="reply"></avatar>
    <div class="flex flex-1 mr-2 p-2">
      <div class="flex flex-col w-full">
        <div class="flex items-center mb-2">
          <a :href="'/profiles/' + reply.owner.username">
            <h4 class="font-bold text-l cursor-pointer hover:underline">
              {{ reply.owner.username }}
            </h4>
          </a>
          <p class="text-xs text-gray-500 ml-2 flex-1">
            {{ reply.created_at }}
          </p>
        </div>
        <div class="text-sm text-gray-700 mb-2">
          <span
            class="flex flex-row float-left bg-gray-200 text-indigo-700 px-1 mr-1 rounded"
            v-if="reply.mentioned_user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            {{ reply.mentioned_user.name }}
          </span>
          <p v-html="body" class=""></p>
        </div>
        <div class="flex flex-row w-full items-center" v-show="this.$signedIn">
          <favourite :reply="reply" v-show="!displayForms"> </favourite>
          <!-- sil -->
          <button
            class="text-red-400 hover:bg-gray-100 mr-1 p-1 flex flex-row"
            @click.prevent="destroy()"
            v-if="!displayForms && !$parent.displayForm"
            v-show="usersOwnReply"
            title="sil"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <!-- yanıtla -->
          <div
            class="text-indigo-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer"
            v-show="!$parent.displayForm && !locked"
            @click.prevent="replyToAnotherReplyRequest"
            title="yanıtla"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <!-- Düzenle -->
          <div class="flex flex-row w-full">
            <div
              class="text-blue-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer"
              v-show="!$parent.displayForm && usersOwnReply && !locked"
              @click.prevent="updateRequest"
              title="düzenle"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
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
import Favourite from "./Favourite.vue";
import BestReplyButton from "./BestReplyButton.vue";
import Avatar from "../../../shared/Avatar.vue"
export default {
  props: ["reply", "bestreply"],
  components: {
    Favourite,
    BestReplyButton,
    Avatar,
  },
  data() {
    return {
      body: this.reply.body,
      originalReply: "",
      displayForms: false,
      usersOwnReply: false,
      id: this.reply.id,
      locked: this.reply.thread.locked,
    };
  },
  computed: {
    changeBest() {
      if (this.bestreply) {
        return this.reply.id == this.bestreply.id;
      }
      return false;
    },
    avatar() {
      return this.reply.owner.avatar_path.length == 1;
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
    updateRequest() {
      this.$emit("updateRequest", this.reply);
    },
    replyToAnotherReplyRequest() {
      this.$emit("replyAnotherReplyRequest", this.reply);
    },
  },
};
</script>

