<template>
  <div>
    <div v-for="(reply, index) in items" :key="reply.id">
      <reply
        :reply="reply"
        :bestreply="bestreply"
        @deleted="remove(index)"
      ></reply>
    </div>
    <paginator :initialDataSet="dataSet" @pageChanged="fetch"></paginator>
    <reply-form
      :thread="thread"
      @created="addReply"
      v-if="this.$signedIn && !$parent.locked && displayForm"
    >
    </reply-form>
    <div class="flex my-2 pl-2 h-32">
      <div class="flex flex-1 mr-2">
        <div class="flex flex-col w-full h-full border-2 m-auto cursor-pointer" v-if="this.$signedIn && !$parent.locked" @click="displayForm = true">
          <div class="flex w-full h-full flex-col items-center justify-center rounded-lg border-dashed m-auto">
            <p class="text-gray-700 text-lg">Yanıtla</p>
          </div>
        </div>
        <!-- @auth -->
        <!-- elseauth -->
        <div class="flex flex-col items-start" v-if="!this.$signedIn">
          <div class="flex">
            <signin-button
              class="bg-gray-300 text-gray-800 hover:bg-gray-100 mr-2"
            >
            </signin-button>
            <register-button
              class="bg-gray-300 text-gray-800 hover:bg-gray-100"
            >
            </register-button>
          </div>
          <p class="text-gray-600 text-sm">
            Mesaj göndermek için giriş yapın ya da kayıt olun
          </p>
        </div>
        <p v-if="$parent.locked" class="text-teal-600 mx-auto mt-4">
          Yönetici bu gönderiyi yoruma kapattı.
        </p>
        <!-- endauth -->
      </div>
    </div>
  </div>
</template>

<script>
import Reply from "./Reply.vue";
import collection from "../../../../mixins/collection.js";
import SigninButton from "../../../auth/SigninButton.vue";
import RegisterButton from "../../../auth/RegisterButton.vue";
import ReplyForm from "./ReplyForm.vue";
import Paginator from "../../../shared/Paginator.vue";
export default {
  components: {
    Reply,
    SigninButton,
    RegisterButton,
    ReplyForm,
    Paginator,
  },

  mixins: [collection],

  props: ["thread", "bestreply"],
  data() {
    return {
      dataSet: false,
      displayForm: false,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch(page) {
      axios.get(this.url(page)).then(this.refresh);
    },
    url(page) {
      if (!page) {
        let query = location.search.match(/page=(\d+)/);
        page = query ? query[1] : 1;
      }
      return `${location.pathname}/replies?page=` + page;
    },
    refresh({ data }) {
      this.items = data.data;
      this.dataSet = data;

      window.scrollTo(0, 0);
    },
  },
};
</script>
