<template>
  <div class="relative inline-block text-left">
    <div @click="expand = !expand">
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="px-4 py-2 lg:mt-0 inline-flex justify-center rounded-md leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          id="options-menu"
        >
          {{ user.name }}
          <!-- Heroicon name: chevron-down -->
          <svg
            class="-mr-1 ml-2 h-5 w-5"
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
    <div class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg w-24"
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
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Profil</a
          >
          <a
            @click.prevent="logout()"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
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
          expand: false
      }
  },

  methods: {
    goProfile() {
        window.location.href = "/profiles/" + this.user.name;
        this.expand= false
    },

    logout() {
      axios
        .post("/logout")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.expand= false
    },
  },
};
</script>