<template>
  <div
    class="flex m-1 flex-col"
    :class="displayForm ? 'items-center' : 'items-end'"
  >
    <button
      v-show="!displayForm"
      @click="displayForm = true"
      class="bg-teal-800 w-32 mb-2 rounded-lg text-white px-2 py-1 text-lg hover:bg-teal-700"
    >
      Yeni Kategori
    </button>
    <channel-form
      :displayForm="displayForm"
      :data-channel="channel"
    ></channel-form>
    <table class="border-collapse w-full" v-show="!displayForm">
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
            Adı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Renk
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Açılan Başlık
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            İşlemler
          </th>
        </tr>
      </thead>
      <tbody v-for="(channel, index) in channels" :key="channel.updated_at">
        <channel
          :data-channel="channel"
          @deleted="deleted(index)"
          @update="updateRequest"
        ></channel>
      </tbody>
    </table>
  </div>
</template>

<script>
import Channel from "../../admin/channels/components/Channel";
import ChannelForm from "./components/ChannelForm.vue";

export default {
  components: {
    Channel,
    ChannelForm,
  },
  props: ["dataChannels"],
  data() {
    return {
      displayForm: false,
      channels: this.dataChannels,
      channel: "",
    };
  },

  methods: {
    deleted(index) {
      this.channels.splice(index, 1);
    },
    updateRequest(channel) {
      this.channel = channel;
      this.displayForm = true;
    },

  },
};
</script>
