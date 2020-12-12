<script>
import Replies from "./local/Replies.vue";
import BestReply from "./local/BestReply.vue";
import SubscribeButton from "./local/SubscribeButton.vue";

export default {
  props: ["dataThread"],
  data() {
    return {
      thread: this.dataThread,
      repliesCount: this.dataThread.replies_count,
      bestReply: this.dataThread.best_reply,
      locked: this.dataThread.locked,
      isAdmin: window.App.isAdmin
    };
  },

  mounted() {
    window.events.$on("markAsBest", (reply) => {
      this.bestReply = reply;
    });
    
    window.events.$on("deleteMarkAsBest", (reply) => {
      this.bestReply = "";
    });
  },

  methods: {
    toggleLock() {
      axios[this.locked ? 'delete' : 'post']('/thread-lock/' + this.dataThread.slug);
      this.locked = !this.locked;
    },
    updated(params) {
      this.thread.body = params.form.body;
      this.thread.title = params.form.title;
      this.thread.channel_id = params.form.channel_id;
      this.thread.channel = params.channel
    }
  },

  components: {
    Replies,
    SubscribeButton,
    BestReply,
  },
};
</script>
