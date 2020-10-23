<template>
  <div class="flex flex-row flex-wrap mb-2">
    <div class="flex">
      <select
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 pl-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
        @change="onChange($event)"
      >
        <option value="#" selected>Sırala</option>
        <option value="last">En Son</option>
        <option value="popular">Populer</option>
      </select>
    </div>
    <a
      href="/threads/create"
      class="p-2 flex-1 button lg:w-full bg-blue-500 hover:bg-blue-600 text-white rounded text-center border-1 border-blue-600"
      >Yeni Konu</a
    >
    <div class="flex" @click="expandChannel = !expandChannel">
      <p
        href="#"
        class="p-2 button text-gray-600 hover:text-gray-800 rounded text-center border-3 border-black mr-0"
        >Konular
      </p>
      <p class="pt-2 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="w-4 h-4 fill-current cursor-pointer"
          v-show="!expandChannel"
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
          class="w-4 h-4 fill-current cursor-pointer"
          v-show="expandChannel"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </p>
      <div class="absolute bg-white mt-10 shadow" v-show="expandChannel">
        <channel :channels="channels"></channel>
      </div>
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
export default {
  data() {
    return {
      expandChannel: false,
      expandOrderBy: false,
    };
  },
  props: ["channels"],
  methods: {
    onChange(event) {
      window.location.href = "/threads?" + event.target.value + "=1";
    },
  },
  components: {
    Channel,
  },
};
</script>
