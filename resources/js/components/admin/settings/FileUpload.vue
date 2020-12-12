<template>
  <label
    class="flex flex-col rounded-lg border border-blue-400 w-32 md:w-64 items-center px-4 py-6 bg-white text-blue shadow-lg uppercase cursor-pointer hover:bg-blue-400 hover:text-white rounded-t-lg mb-2"
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
    <span class="mt-2 text-base leading-normal">Logo</span>
    <input
      type="file"
      class="hidden"
      name="logo"
      accept="image/*"
      v-on:change="previewFile"
    />
  </label>
</template>

<script>
export default {
  data() {
    return {
      primitiveLogo: "",
    };
  },
  methods: {
    previewFile(event) {
      if (!event.target.files.length) return;

      let logo = event.target.files[0];

      let reader = new FileReader();

      reader.readAsDataURL(logo);

      reader.onload = (event) => {
        this.primitiveLogo = event.target.result;
        this.$emit("initialUpload", {
          logo: logo,
          primitiveLogo: this.primitiveLogo,
        });
      };
    },
  },
};
</script>
