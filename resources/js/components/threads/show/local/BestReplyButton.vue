<template>
  <div
    class="rounded-md flex flex-row items-center px-2 py-1 cursor-pointer"
    :class="isBest ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-gray-100'"
    @click="markAsBest"
  >
    <p class="-mr-4 w-24">En İyi Yanıt</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['isBest'],
  methods: {
    markAsBest() {
      this.$emit("markAsBest");
    },
  },
};
</script>

