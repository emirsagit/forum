<template>
  <div class="flex m-1 flex-col">
    <thread-form
      v-if="displayForm"
      :data-thread="thread"
      @updated="updated"
      @created="created"
      @reset="reset"
    ></thread-form>
    <div
      class="flex m-1 sm:flex-row flex-col-reverse justify-between items-center"
      v-if="!displayForm"
    >
      <select
        class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 text-sm rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer mr-4 max-content px-2 py-2 mb-1"
        id="grid-state"
        @change="fetch()"
        v-model="selectedChannel"
      >
        <option value="all">Tamamı</option>
        <option
          v-for="channel in dataChannels"
          :key="channel.id"
          v-text="channel.name"
          :value="channel"
        ></option>
      </select>
      <div class="flex flex-row my-2">
        <input
          type="search"
          class="bg-purple-white shadow rounded border-0 p-1 pl-2"
          placeholder="Ara..."
          v-model="search"
        />
        <svg
          version="1.1"
          class="h-4 text-dark mt-2 -ml-4 cursor-pointer hover:text-teal-600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
          style="enable-background: new 0 0 52.966 52.966"
          xml:space="preserve"
          @click="searchRequest"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
          c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
          C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
          S32.459,40,21.983,40z"
          />
        </svg>
      </div>
      <a
        class="bg-teal-800 mb-2 rounded-lg text-white px-2 py-1 text-lg hover:bg-teal-700 cursor-pointer hidden md:flex"
        @click="displayForm = true"
      >
        Yeni Başlık
      </a>
    </div>
    <table class="border-collapse w-full" v-if="!displayForm">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Tarih
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Başlık
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Kategori
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Yapılan Yorum
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Yoruma Kapalı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            İşlemler
          </th>
        </tr>
      </thead>
      <tbody v-for="(thread, index) in threads" :key="thread.id">
        <admin-thread
          :data-thread="thread"
          @deleted="deleted(index)"
          @update-request="updateRequest"
        ></admin-thread>
      </tbody>
    </table>
    <div class="fixed bottom-0 right-0 mr-4 mb-4 md:hidden">
      <a
        class="bg-indigo-700 hover:bg-indigo-600 text-white flex flex-col m-auto rounded-full p-2 cursor-pointer"
         @click.prevent="displayForm = true"
         v-if="! displayForm"
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
import AdminThread from "../../admin/threads/components/AdminThread.vue";
import ThreadForm from "./components/ThreadForm.vue";

export default {
  components: { AdminThread, ThreadForm },
  props: ["dataThreads", "dataChannels"],
  data() {
    return {
      threads: this.dataThreads,
      displayForm: false,
      thread: "",
      selectedChannel: "all",
      search: "",
    };
  },
  methods: {
    deleted(index) {
      this.threads.splice(index, 1);
    },
    updateRequest(thread) {
      this.thread = thread;
      this.displayForm = true;
    },
    updated: async function (thread) {
      const index = this.threads.findIndex((el) => el.id === thread.id);
      Vue.set(this.threads, index, thread);
      this.displayForm = false;
    },
    created(thread) {
      this.threads.unshift(thread);
      this.reset();
      this.displayForm = false;
    },
    reset() {
      console.log("burada");
      this.displayForm = false;
      this.thread = "";
    },
    fetch() {
      if (this.selectedChannel === "all") {
        this.threads = this.dataThreads;
      } else {
        axios.get("/threads/" + this.selectedChannel.slug).then((response) => {
          this.threads = response.data.data;
        });
      }
    },
    searchRequest() {
      axios
        .post("/admin/threads/search", {
          search: this.search,
        })
        .then((response) => {
          console.log(response);
          this.threads = response.data;
        });
    },
  },
};
</script>
