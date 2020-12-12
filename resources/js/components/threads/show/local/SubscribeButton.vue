<template>
  <a
    href="#"
    class="my-2 flex flex-row items-center font-semibold  py-1 px-2 lg:py-2 lg:px-4 border border-gray-400 rounded shadow lg:mt-0 lg:justify-center md:hover:bg-gray-100 mr-1 text-sm"
    :class="classes"
    @click.prevent="toggleSubscribe()"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="mr-1 w-5 h-5"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
    Takip Et
  </a>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      isActive: this.active,
    };
  },
  computed: {
    classes() {
      return this.isActive
        ? "bg-yellow-200 text-yellow-600"
        : "bg-white text-gray-800";
    },
  },
  methods: {
    toggleSubscribe() {
      if (this.isActive) {
        axios
        .delete(location.pathname + "/subscribe")
        .then(flash('Takipten Çıktınız'));
        this.isActive=false;
      } else {
        axios
          .post(location.pathname + "/subscribe")
          .then(flash("Takiptesiniz..."));
        this.isActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>