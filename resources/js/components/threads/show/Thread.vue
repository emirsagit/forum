<script>
import Replies from "./local/Replies.vue";
import SubscribeButton from "./local/SubscribeButton.vue";
export default {
  props: ["count"],
  data() {
    return {
      repliesCount: this.count,
    };
  },

  components: {
    Replies,
    SubscribeButton
  },
};
</script>
