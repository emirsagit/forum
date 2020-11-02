<template>
  <div class="flex flex-1">
    <div class="flex mr-2">ava</div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-row justify-between">
        <h3 class="text-black text-l flex-1">{{ thread.title }}</h3>
        <div class="px-2 lg:bg-gray-200 max-content flex flex-row items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mt-1 mr-1 fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p class="text-gray-700">{{ thread.replies_count }}</p>
        </div>
      </div>
      <p class="text-sm text-gray-700">{{ thread.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
    },
  },
};
</script>
