<template>
  <div>
    <div
      class="bg-white flex items-center rounded-full shadow-md z-30 flex-row absolute lg:static left-0 mt-16 md:mt-0"
      v-if="showInput || $parent.windowWidth > 1024"
    >
      <input
        class="rounded-l-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
        type="text"
        placeholder="Ara"
        v-model="search"
        required
      />
      <div class="p-2">
        <button
          class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
          @click.prevent="searchRequest"
          type="submit"
        >
          <svg
            version="1.1"
            class="h-6 text-white cursor-pointer hover:text-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 52.966 52.966"
            style="enable-background: new 0 0 52.966 52.966"
            xml:space="preserve"
            fill="currentColor"
            width="1.5em"
            height="1.5em"
          >
            <path
              d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
      S32.459,40,21.983,40z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="p-2 lg:hidden">
      <span
        class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center cursor-pointer"
        @click.prevent="showInput = true"
        v-if="!showInput"
      >
        <svg
          version="1.1"
          class="h-6 text-white cursor-pointer hover:text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
          style="enable-background: new 0 0 52.966 52.966"
          xml:space="preserve"
          fill="currentColor"
          width="1.5em"
          height="1.5em"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
  S32.459,40,21.983,40z"
          />
        </svg>
      </span>
      <span
        class="bg-red-500 text-white rounded-full p-2 hover:bg-red-400 focus:outline-none w-12 h-12 flex items-center justify-center cursor-pointer"
        v-if="showInput"
        @click.prevent="showInput = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="1.5em"
          height="1.5em"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false,
      search: "",
    };
  },

  methods: {
    searchRequest() {
      window.location.href = "/search?search=" + this.search;
    },
  },
};
</script>
