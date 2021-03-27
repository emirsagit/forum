<template>
  <div
    class="flex flex-col items-center md:justify-between w-full justify-center pt-4 bg-navy text-white"
  >
    <div class="mt-4 mb-6">
      <footer-social :setting="setting"></footer-social>
    </div>
    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
      <div class="text-sm font-semibold py-1">
        Copyright © 2021 Forum Starter Template
        <a
          href="mailto:emirsagit@gmail.com"
          class="text-white hover:text-teal-200"
          >by Emir Sağıt</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import FooterSocial from "./footer-components/FooterSocial.vue";
export default {
  props: ["setting"],
  components: {
    FooterSocial,
  },
  data() {
    return {
      about: this.setting ? this.setting.about : "",
    };
  },
};
</script>