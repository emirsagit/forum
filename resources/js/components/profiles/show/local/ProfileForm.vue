<template>
  <div>
    <form
      v-if="$authorize('updateProfile', user)"
      enctype="multipart/form-data"
      class="flex flex-row items-center justify-center bg-grey-lighter mb-2"
    >
      <div class="flex flex-col m-auto">
        <file-upload @initialUpload="persist"></file-upload>
        <div class="flex overflow-hidden my-1" v-if="hasAvatar">
          <img
            class="h-20 w-20 rounded-full text-white shadow-solid m-auto"
            :src="avatar"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FileUpload from "./FileUpload.vue";
export default {
  components: {
    FileUpload,
  },

  methods: {
    persist(data) {
      let form = new FormData();
      form.append("avatar", data.avatar);
      axios
        .post("/api/profiles/" + this.user.name + "/avatar", form)
        .then((response) => {
          flash("Avatar Kaydedildi");
          this.avatar = data.primitiveAvatar;
          this.$emit("updated", this.avatar);
        })
        .catch((error) => {
          flash(error.response.data.errors.avatar[0], "error");
        });
    },
  },

  data() {
    return {
      avatar: this.user.avatar_path,
    };
  },

  computed: {
    hasAvatar() {
      return this.avatar.length > 1;
    },
  },

  props: ["user"],
};
</script>
