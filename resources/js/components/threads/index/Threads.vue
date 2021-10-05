<template>
  <div class="flex flex-row flex-wrap-reverse mt-4 lg:w-4/5 lg:m-auto lg:mt-8">
    <div class="hidden lg:flex flex-col lg:w-1/4 lg:h-screens px-2">
      <trending-threads :trendings="trendings"></trending-threads>

      <channel
        :channels="channels"
        @selected="selectedChannel"
        :selected-channel="channel"
      ></channel>
    </div>
    <div class="flex flex-col px-4 lg:w-3/4 w-full">
      <threads-header
        :channels="channels"
        @filter="filter"
        @selected="selectedChannel"
        :selected-channel="channel"
      >
      </threads-header>

      <div class="flex mb-2 p-2" v-for="thread in threads" :key="thread.id">
        <thread :thread="thread" @selected="selectedChannel"></thread>
      </div>

      <paginator :initialDataSet="dataSet" @pageChanged="fetch"></paginator>

      <h3 class="text-gray-700 text-lg mt-4" v-if="threads.length <= 0">
        Maalesef aradığınız konuyla ilgili paylaşım bulamadık. Yeni paylaşım sekmesinden sohbeti siz başlatabilirsiniz.
      </h3>
    </div>
    <div class="fixed bottom-0 right-0 mr-4 mb-4 md:hidden">
      <a
        class="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white flex flex-col m-auto rounded-full p-2"
        @click.prevent="newThreadRequest"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import Paginator from "../../shared/Paginator.vue";
import Channel from "./local/Channel.vue";
import Thread from "./local/Thread.vue";
import ThreadsHeader from "./local/ThreadsHeader.vue";
import TrendingThreads from "./local/TrendingThreads.vue";
export default {
  components: {
    Channel,
    Thread,
    ThreadsHeader,
    TrendingThreads,
    Paginator,
  },

  data() {
    return {
      threads: this.data.data,
      dataSet: this.data,
      expandChannel: false,
      expandOrderBy: false,
      filterBy: "",
      channel: this.dataChannel ? this.dataChannel : "",
    };
  },

  props: ["data", "trendings", "channels", "dataChannel"],

  methods: {
    newThreadRequest() {
      if (App.signedIn) {
        window.location.href = "/threads/create";
      } else {
        window.toggle("login", true);
      }
    },

    filter(value) {
      this.filterBy = value;
      this.fetch();
    },

    fetch(page) {
      axios.get(this.url(page)).then(this.refresh);
    },

    url(page) {
      if (!page) {
        let query = location.search.match(/page=(\d+)/);
        page = query ? query[1] : 1;
      }
      if (this.filterBy) {
        history.pushState(null, null, "?" + this.filterBy + "=1&page=" + page);
        return location.pathname + "?" + this.filterBy + "=1&page=" + page;
      } else {
        return location.pathname + "?" + this.filterBy + "=1&page=" + page;
      }
    },

    refresh({ data }) {
      this.threads = data.data;
      this.dataSet = data;
    },

    selectedChannel(channel) {
      this.channel = channel;
      if (this.filterBy) {
        history.pushState(
          null,
          null,
          "/forum/" + channel.slug + "?" + this.filterBy + "=1"
        );
        axios
          .get("/forum/" + channel.slug + "?" + this.filterBy + "=1")
          .then(this.refresh);
      } else {
        history.pushState(null, null, "/forum/" + channel.slug);
        axios.get("/forum/" + channel.slug).then(this.refresh);
      }
    },
  },
};
</script>
