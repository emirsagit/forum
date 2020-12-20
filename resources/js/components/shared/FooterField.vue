<template>
  <div class="">
    <div class="relative bg-gray-300 pt-8 pb-6">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px; transform: translateZ(0px)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 flex flex-wrap items-center lg:items-start flex-col">
            <h4 class="text-3xl font-semibold">Hakkımızda</h4>
            <h5 class="text-md mt-0 mb-2 text-gray-700">
              {{ about }}
            </h5>
            <footer-social :setting="setting"></footer-social>
          </div>
          <div class="w-full lg:w-6/12 px-4 mt-6">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 ml-auto">
                <span
                  class="block uppercase text-gray-600 text-sm font-semibold text-center"
                  >Kullanışlı Bağlantılar</span
                >
                <nav-link class="text-gray-700"></nav-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center md:justify-between w-full justify-center bg-gradient-to-r from-teal-500 to-blue-500 text-white"
    >
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm font-semibold py-1">
          Copyright © 2020 Forum Starter Template
          <a
            href="mailto:emirsagit@gmail.com"
            class="text-white hover:text-teal-200"
            >by Emir Sağıt</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterSocial from "./footer-components/FooterSocial.vue";
import NavLink from "./NavLink.vue";
export default {
  props: ["setting"],
  components: {
    FooterSocial,
    NavLink,
  },
  data() {
    return {
      about: this.setting ? this.setting.about : "",
    }
  },
};
</script>