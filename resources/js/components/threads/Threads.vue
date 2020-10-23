<template>
  <div class="flex flex-row mt-2 flex-wrap-reverse lg:w-4/5 lg:m-auto lg:mt-8">
    <div
      class="invisible lg:visible lg:flex flex-col lg:w-1/4 lg:h-screens p-2"
    >
      <p class="mb-4 p-2 text-xl text-teal-600">Konular</p>
      <channel :channels="channels"></channel>
    </div>
    <div class="flex flex-col px-4 lg:w-3/4">
      <threads-header :channels="channels"> </threads-header>
      <div
        class="flex mb-2 md:hover:bg-gray-200 p-2 cursor-pointer"
        @click.prevent="href(thread)"
        v-for="thread in threads"
        :key="thread.id"
      >
        <thread :thread="thread"></thread>
      </div>
      <h3 class="text-gray-700 text-l mt-4" v-if="threads.length <= 0">
        Maalesef aradığınız konuyla ilgili yazı bulamadık.
      </h3>
    </div>
  </div>
</template>

<script>
import Channel from "./local/Channel.vue";
import Thread from "./local/Thread.vue";
import ThreadsHeader from "./local/ThreadsHeader.vue";
export default {
  components: {
    Channel,
    Thread,
    ThreadsHeader,
  },
  methods: {
    href(thread) {
      window.location.href =
        "/threads/" + thread.channel.slug + "/" + thread.id;
    },
  },
  data() {
    return {
      channels: {},
      expandChannel: false,
      expandOrderBy: false,
    };
  },
  props: {
    threads: {
      type: Array,
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
