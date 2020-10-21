<template>
  <div class="flex flex-row mt-2 flex-wrap-reverse lg:w-4/5 lg:m-auto lg:mt-8">
    <div class="invisible lg:visible lg:flex lg:w-1/4 lg:h-screens p-2">
      <ul class="w-full">
        <p class="mb-4 p-2 text-xl text-teal-600">Konular</p>
        <li
          v-for="channel in channels"
          :key="channel.id"
          class="mb-2 p-2 text-gray-600 hover:text-teal-600"
        >
          <a :href="`/threads/${channel.slug}`">{{ channel.name }}</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col px-4 lg:w-3/4">
      <div class="flex flex-row mb-2">
        <a
          href="/threads/create"
          class="p-2 w-64 button lg:w-full bg-blue-500 hover:bg-blue-600 text-white rounded text-center border-1 border-blue-600"
          >Yeni Konu Oluştur</a
        >
        <div class="flex"  @click="expand = !expand">
          <a
            href="#"
            class="pt-2 w-32 button text-gray-600 hover:text-gray-800 rounded text-center border-3 border-black mr-0"
            >Konular
          </a>
          <p class="pt-2 text-gray-600 -ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="w-4 h-4 fill-current cursor-pointer"
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
              class="w-4 h-4 fill-current cursor-pointer"
              v-show="expand"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
          <div class="absolute bg-white mt-8 ml-8 shadow"
                v-show="expand"
          >
            <ul class="w-full mb-2">
              <li
                v-for="channel in channels"
                :key="channel.id"
                class="p-1 px-2 text-gray-600 hover:text-teal-600"
              >
                <a :href="`/threads/${channel.slug}`">{{ channel.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
       <h3 class="text-gray-700 text-l mt-4" v-if="threads.length <= 0">Maalesef aradığınız konuyla ilgili yazı bulamadık.</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: {},
      expand: false,
    };
  },
  props: {
    threads: {
      type: Array,
    },
  },
  methods: {
    href(thread) {
      window.location.href =
        "/threads/" + thread.channel.slug + "/" + thread.id;
    },
  },
  mounted() {
    axios
      .get("/channels")
      .then((response) => {
        this.channels = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
