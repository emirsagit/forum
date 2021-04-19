<template>
  <div
    class="flex flex-row md:sticky md:top-0 lg:justify-center py-1 lg:py-2 overflow-x-auto bg-teal-800 bg-opacity-75 z-40"
  >
    <div class="flex flex-row items-center">
      <a
        class="text-sm text-center font-semibold px-2 rounded-md mx-2 lg:mr-8 text-white transition duration-500 ease-in-out py-1 lg:py-2"
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
  props: ["channels"],

  methods: {
    dataUrl(slug) {
      var pageURL = window.location.href;
      return slug === pageURL.substr(pageURL.lastIndexOf("/") + 1);
    },
  },
};
</script>