<template>
  <a
    class="mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg ease-in-out duration-500 transform flex flex-row items-center"
    href="#"
    @click.prevent="showing()"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="23"
      height="23"
      class="hidden md:flex"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      />
    </svg>
    Giriş</a
  >
</template>

<script>
export default {
  methods: {
    showing() {
      window.toggle("login", true);
    },
  },
};
</script>
