<template>
  <div class="relative inline-block text-left z-50">
      <div @click="expand = !expand">
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            class="mt-4 lg:mt-0 mr-4 hover:text-teal-800 flex flex-row items-center font-semibold"
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
        </span>
      </div>
      <div
        class="origin-top-right absolute mt-8 rounded-md shadow-lg w-24"
        v-show="expand"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div
            class="py-1 cursor-pointer"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              @click.prevent="goProfile()"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold"
              role="menuitem"
              >Profil</a
            >
            <a
              @click.prevent="logout()"
              class="block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold text-sm"
              role="menuitem"
            >
              Çıkış</a
            >
            <form
              id="logout-form"
              action="/logout"
              method="POST"
              class="d-none"
            ></form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["user"],

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
           window.location.reload()
        })
        .catch(function (error) {
          console.log(error);
        });
      this.expand = false;
    },
  },
};
</script>