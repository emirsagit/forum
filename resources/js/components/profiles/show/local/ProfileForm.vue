<template>
  <div>
    <form
      v-if="canUpdate"
      enctype="multipart/form-data"
      class="flex flex-row items-center justify-center bg-grey-lighter mb-2"
    >
      <div class="flex flex-col m-auto">
        <label
          class="flex flex-col rounded-lg border border-blue-400 w-64 items-center px-4 py-6 bg-white text-blue shadow-lg uppercase cursor-pointer hover:bg-blue-400 hover:text-white rounded-t-lg"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span class="mt-2 text-base leading-normal">Foto Yükleyin</span>
          <input
            type="file"
            class="hidden"
            name="avatar"
            accept="image/*"
            v-on:change="previewFile"
          />
        </label>
        <div class="flex overflow-hidden my-1" v-if="avatar">
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
export default {
  methods: {
    previewFile(event) {
      if (!event.target.files.length) return;

      let avatar = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(avatar);
      reader.onload = (event) => {
        this.primitiveAvatar = event.target.result;
      };

      this.persist(avatar);
    },

    persist(avatar) {
      let form = new FormData();
      form.append("avatar", avatar);
      axios
        .post("/api/profiles/" + this.user.name + "/avatar", form)
        .then((response) => {
          flash("Avatar Kaydedildi");
          this.avatar = this.primitiveAvatar;
          this.$emit("updated", this.avatar);
        })
        .catch((error) => {
           flash(error.response.data.errors.avatar[0], 'error');
        })
    },
  },

  data() {
    return {
      avatar: this.user.avatar_path,
      primitiveAvatar:""
    };
  },

  props: ["user"],
  
  computed: {
    canUpdate() {
      return this.authorize((user) => user.id === this.user.id);
    },
  },
};
</script>
