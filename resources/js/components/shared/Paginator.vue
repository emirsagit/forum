<template>
  <div
    class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mb-4"
    v-show="shouldPaginate"
  >
    <div class="flex-1 flex flex-row-reverse items-center justify-between">
      <div>
        <p class="text-sm leading-5 text-gray-700">
          <span class="font-medium" v-text="total"></span>
          yanıttan
          <span class="font-medium" v-text="from"></span>
          -
          <span class="font-medium" v-text="to"></span>
          arası gürüntüleniyor.
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex shadow-sm">
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
            v-show="prevUrl"
            @click.prevent="page--"
          >
            <!-- Heroicon name: chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <p
            class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700"
            v-text="page"
          ></p>
          <a
            href="#"
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
            v-show="nextUrl"
            @click.prevent="page++"
          >
            <!-- Heroicon name: chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["initialDataSet"],
  watch: {
    initialDataSet() {
      this.page = this.initialDataSet.current_page;
      this.prevUrl = this.initialDataSet.prev_page_url;
      this.nextUrl = this.initialDataSet.next_page_url;
      this.total = this.initialDataSet.total;
      this.from = this.initialDataSet.from;
      this.to = this.initialDataSet.to;
    },
    page() {
      this.broadcast();
      this.updateUrl();
    },
  },
  data() {
    return {
      page: this.initialDataSet.current_page,
      prevUrl: this.initialDataSet.prev_page_url,
      nextUrl: this.initialDataSet.next_page_url,
      total: this.initialDataSet.total,
      from: this.initialDataSet.from,
      to: this.initialDataSet.to,
    };
  },
  computed: {
    shouldPaginate() {
      return !!this.prevUrl || !!this.nextUrl;
    },
  },
  methods: {
    broadcast() {
      return this.$emit("pageChanged", this.page);
    },
    updateUrl() {
      history.pushState(null, null, "?page=" + this.page);
    },
  },
};
</script>
