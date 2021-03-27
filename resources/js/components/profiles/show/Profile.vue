<script>
import ProfileForm from "./local/ProfileForm.vue";
export default {
  data() {
    return {
      avatar: this.data,
    };
  },
  props: ["data"],
  components: {
    ProfileForm,
  },
  methods: {
    updated(avatar) {
      this.avatar = avatar;
    },
  },
  computed: {
    avatarHasExisted() {
      return this.avatar.length == 1;
    },
  },
};
</script>
