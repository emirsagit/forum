<template>
  <div class="flex shadow-sm p-1 rounded-xl flex-col mb-8">
    <div
      class="flex flex-row justify-between cursor-pointer"
      @click="expand = !expand"
    >
      <h5 class="lg:text-2xl text-lg text-indigo-800 cursor-pointer pr-2">
        <span class="text-gray-500">{{ index + 1 }}.</span>
        {{ dataPuzzle.question }}
      </h5>
      <span class="text-indigo-500 lg:mt-1 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-8 h-8 fill-current cursor-pointer"
          v-show="!expand"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-8 h-8 fill-current cursor-pointer"
          v-show="expand"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <p v-show="expand" class="text-gray-500 text-xl">
       Yanıt: <span class="text-gray-800">{{ dataPuzzle.answer }}</span> 
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: false,
    };
  },
  props: ["dataPuzzle", "index"],
};
</script>
