<template>
  <div class="flex flex-row mt-2 flex-wrap-reverse lg:w-4/5 lg:m-auto lg:mt-8">
    <div class="invisible lg:visible lg:flex lg:w-1/4 lg:h-screens p-2">
      columneeeeeeeee rferr rererr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    </div>
    <div class="flex flex-col px-4 lg:w-3/4">
      <div
        class="flex mb-2 md:hover:bg-gray-200 p-2 cursor-pointer"
        @click.prevent="href(thread)"
        v-for="thread in threads"
        :key="thread.id"
      >
        <div class="flex mr-2">1</div>
        <div class="flex flex-1 mr-2">
          <div class="flex flex-col">
            <h3 class="text-black text-l">{{ thread.title }}</h3>
            <p class="text-sm text-gray-700">{{ thread.body }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="px-2 bg-gray-200 max-content">
            <p class="text-gray-700">0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    threads: {
      type: Array,
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    href(thread) {
     window.location.href = '/' + thread.id;
    },
  },
};
</script>
