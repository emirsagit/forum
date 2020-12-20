<template>
  <div
    class="flex flex-row sticky top-0 lg:justify-center py-4 overflow-x-auto h-16 bg-teal-800 bg-opacity-75 z-40"
  >
    <div class="flex flex-row items-center">
      <a
        class="text-lg font-semibold px-2 rounded-md mr-4 lg:mr-8 text-white"
        :href="'/blogs/channels/' + channel.slug"
        :class="
          dataUrl(channel.slug)
            ? 'bg-transparent'
            : 'bg-' + channel.color + '-800 hover:bg-' + channel.color + '-600'
        "
        v-for="channel in channels"
        :key="channel.id"
      >
        #{{ channel.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: "",
    };
  },
  created() {
    axios.get("/channels").then((response) => {
      this.channels = response.data;
    });
  },
  methods: {
    dataUrl(slug) {
      var pageURL = window.location.href;
      return slug === pageURL.substr(pageURL.lastIndexOf("/") + 1);
    },
  },
};
</script>