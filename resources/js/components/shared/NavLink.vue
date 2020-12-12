<template>
  <div class="flex flex-col">
    <a
      href="/"
      class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-800"
    >
      Forum
    </a>
    <a
      @click="newThreadRequest"
      class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-800"
    >
      Yeni Konu
    </a>
    <a
      class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-800"
      href="/contact"
    >
      İletişim
    </a>
    <!-- component -->
  </div>
</template>

<script>
export default {
  methods: {
    newThreadRequest() {
      if (App.signedIn) {
        window.location.href = "/threads/create";
      } else {
        window.toggle("login", true);
      }
    },
  },
};
</script>
