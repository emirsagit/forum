<template>
  <div class="flex flex-col items-center mb-4 sticky top-0">
    <p class="mb-1 p-2 text-xl text-teal-600">Konular</p>
    <ul class="w-full flex flex-col items-center">
      <li
        class="flex flex-col items-center w-2/3 m-1 p-1 rounded-lg hover:bg-gray-200 hover:text-teal-600 hover:border-teal-600 border-2 cursor-pointer"
        :class="
          !selected
            ? 'bg-gray-200 text-teal-600 border-teal-600'
            : 'bg-gray-100 text-gray-600'
        "
        @click="all"
      >
        Tüm Konular
      </li>
      <li
        v-for="channel in channels"
        :key="channel.id"
        class="flex flex-row align-center justify-left items-center w-3/5 m-1 p-1 rounded-lg  border-2 cursor-pointer"
        @click="fetch(channel)"
        :class="
          selected.id == channel.id
            ? 'bg-gray-200 text-'+channel.color+'-600 border-'+channel.color+'-600'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-'+channel.color+'-600 hover:border-'+channel.color+'-600'
        "
      >
        <span class="rounded-full mr-2"
              :class="'bg-'+channel.color+'-600'"
          >
          <svg class="w-4 h-4">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </span>
        <p>{{ channel.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["channels", "selectedChannel"],
  data() {
    return {
      selected: "",
    };
  },
  watch: {
    selectedChannel() {
      this.selected = this.selectedChannel;
    },
  },
  methods: {
    fetch(channel) {
      this.selected = channel;
      this.$emit("selected", channel);
    },
    all() {
      window.location.href = "/";
    },
  },
};
</script>
