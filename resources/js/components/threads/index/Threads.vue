<template>
  <div class="flex flex-row flex-wrap-reverse mt-4 lg:w-4/5 lg:m-auto lg:mt-8">
    <div
      class="hidden lg:flex flex-col lg:w-1/4 lg:h-screens px-2"
    >
      <trending-threads :trendings="trendings"></trending-threads>
      <channel :channels="channels"></channel>
    </div>
    <div class="flex flex-col px-4 lg:w-3/4">
      <threads-header :channels="channels"> </threads-header>
      <div
        class="flex mb-2 p-2"
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
import TrendingThreads from "./local/TrendingThreads.vue";
export default {
  components: {
    Channel,
    Thread,
    ThreadsHeader,
    TrendingThreads
  },
  data() {
    return {
      threads:this.data.data,
      channels: {},
      expandChannel: false,
      expandOrderBy: false,
    };
  },
  props:  ["data", 'trendings'],
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
