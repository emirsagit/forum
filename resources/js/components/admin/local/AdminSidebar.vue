<template>
  <div class="flex flex-col w-full sticky top-0 ">
    <p
      class="cursor-pointer mb-2 flex flex-col items-end mr-1"
      @click="$parent.hide = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </p>
    <div class="flex flex-col justify-center w-4/5">
      <a
        class="flex w-full max-content border-2 rounded-lg hover:border-white lg:px-2 lg:py-1 cursor-pointer justify-center mx-1 lg:mx-2 mb-2"
        :class="currentPage == '/admin' ? 'border-white' : 'border-indigo-600'"
        :href="'/admin'"
      >
        Genel Ayarlar
      </a>
      <a
        class="flex w-full max-content border-2 rounded-lg hover:border-white lg:px-2 lg:py-1 cursor-pointer justify-center mx-1 lg:mx-2 mb-2"
        :class="
          currentPage == '/admin/channels'
            ? 'border-white'
            : 'border-indigo-600'
        "
        :href="'/admin/channels'"
      >
        Kategoriler
      </a>
      <a
        class="flex w-full max-content border-2 rounded-lg hover:border-white lg:px-2 lg:py-1 cursor-pointer justify-center mx-1 lg:mx-2 mb-2"
        :class="
          currentPage == '/admin/threads' ? 'border-white' : 'border-indigo-600'
        "
        :href="'/admin/threads'"
      >
        Başlıklar
      </a>
      <a
        class="flex w-full max-content border-2 rounded-lg hover:border-white lg:px-2 lg:py-1 cursor-pointer justify-center mx-1 lg:mx-2 mb-2"
        :class="
          currentPage == '/admin/users' ? 'border-white' : 'border-indigo-600'
        "
        :href="'/admin/users'"
      >
        Üyeler
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: window.location.pathname,
    };
  },
};
</script>
