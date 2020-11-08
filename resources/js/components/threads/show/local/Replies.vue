<template>
  <div>
    <div v-for="(reply, index) in items" :key="reply.id">
      <reply :reply="reply" @deleted="remove(index)" @created="addReply"></reply>
    </div>
    <paginator :initialDataSet="dataSet" @pageChanged="fetch"></paginator>
    <div class="flex my-2 pl-2">
      <div class="flex flex-1 mr-2">
        <!-- @auth -->
        <reply-form :thread="thread" @created="addReply" v-if="signedIn">
        </reply-form>
        <!-- elseauth -->
        <div class="flex flex-col items-start" v-else>
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
    Paginator
  },

  mixins: [collection],

  props: ["thread"],
  data() {
    return {
      dataSet: false,
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
      if (! page) {
        let query = location.search.match(/page=(\d+)/);
        page = query ? query[1] : 1;
      }
      return `${location.pathname}/replies?page=`+ page;
    },
    refresh({data}) {
      this.items = data.data;
      this.dataSet = data 

      window.scrollTo(0,0);
    },
  },
  computed: {
    signedIn() {
      return window.App.signedIn;
    },
  },
};
</script>
