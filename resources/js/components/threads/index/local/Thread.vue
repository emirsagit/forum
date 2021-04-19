<template>
  <a
    class="flex flex-1 flex-col lg:flex-row shadow-md p-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-300 transform bg-white"
    @click.prevent="href(thread)"
  >
    <div class="flex mr-2 mt-1 justify-between items-center lg:items-start">
      <avatar :item="thread"></avatar>
      <div class="lg:hidden flex flex-row">
        <button
          @click="$emit('selected', thread.channel)"
          class="rounded-md px-2 py-1 mr-2 font-semibold text-white text-xs"
          :class="
            'bg-' +
            thread.channel.color +
            '-600 hover:bg-' +
            thread.channel.color +
            '-700'
          "
        >
          {{ thread.channel.name }}
        </button>
        <div class="ml-2 max-content flex flex-row text-gray-700 items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p class="text-gray-700 text-sm">{{ thread.replies_count }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-col lg:flex-row justify-between">
        <a
          class="text-black text-l flex-1 cursor-pointer hover:text-gray-800 order-3 lg:order-1"
          @click.prevent="href(thread)"
        >
          <h3 class="font-semibold text-lg">{{ thread.title }}</h3>
        </a>
        <button
          @click="$emit('selected', thread.channel)"
          class="rounded-md px-4 py-1 mr-2 text-xs font-semibold text-white hidden lg:flex max-content order-2"
          :class="
            'bg-' +
            thread.channel.color +
            '-600 hover:bg-' +
            thread.channel.color +
            '-700'
          "
        >
          {{ thread.channel.name }}
        </button>
        <div
          class="ml-2 max-content lg:flex-row text-gray-700 items-start order-1 lg:order-3 hidden lg:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p class="text-gray-700 text-sm">{{ thread.replies_count }}</p>
        </div>
      </div>
      <div class="p-link text-sm text-gray-700" v-html="thread.body"></div>
      <div class="mt-1 mb-2">
        <p class="text-sm text-gray-500">
          <a
            class="text-blue-700 text-sm"
            >{{ thread.owner.username }}</a
          >&nbsp;tarafından oluşturuldu.&nbsp;{{ thread.visits_count }} kez
          görüntülendi.
        </p>
      </div>
    </div>
  </a>
</template>

<script>
import Avatar from "../../../shared/Avatar.vue";
export default {
  components: {
    Avatar,
  },
  computed: {
    avatar() {
      return this.thread.owner.avatar_path.length == 1;
    },
  },
  props: {
    thread: {
      type: Object,
    },
  },
  methods: {
    href(thread) {
      window.location.href =
        "/" + thread.slug;
    },
  },
};
</script>
