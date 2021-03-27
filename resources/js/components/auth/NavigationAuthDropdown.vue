<template>
  <div
    class="relative rounded-lg text-gray-800 bg-gray-100 p-2"
    @click="expand = !expand"
    v-on-clickaway="away"
  >
    <button
      type="button"
      class="mr-2 flex flex-row items-center font-semibold text-xl focus:outline-none"
      id="options-menu"
    >
      {{ user.username }}
      <!-- Heroicon name: chevron-down -->
      <svg
        class="-mr-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      class="absolute top-0 mt-12 rounded-md shadow-lg w-24 py-1 bg-white z-50"
      v-show="expand"
    >
      <button
        @click.prevent="goProfile()"
        class="px-4 py-2 text-lg leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold cursor-pointer w-full flex flex-row items-center"
        role="menuitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="pr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Profil
      </button>
      <button
        @click.prevent="logout()"
        class="px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold text-lg cursor-pointer w-full flex flex-row items-center"
        role="menuitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
           class="pr-1 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Çıkış
      </button>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
export default {
  props: ["user"],

  directives: {
    onClickaway: onClickaway,
  },

  data() {
    return {
      expand: false,
    };
  },

  methods: {
    goProfile() {
      window.location.href = "/profiles/" + this.user.username;
      this.expand = false;
    },

    logout() {
      axios
        .post("/logout")
        .then(function (response) {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
      this.expand = false;
    },

    away: function () {
      this.expand = false;
    },
  },
};
</script>