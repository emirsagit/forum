<template>
  <div class="flex flex-1">
    <div class="flex mr-2 mt-1">
      <div class="flex overflow-hidden">
        <img
          class="inline-block h-8 w-8 rounded-full text-white shadow-solid"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-row justify-between">
        <a
          class="text-black text-l flex-1 cursor-pointer hover:text-gray-800"
          @click.prevent="href(thread)"
        >
          <h3>{{ thread.title }}</h3>
        </a>
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
      <div class="p-link text-sm text-gray-700" v-html="thread.body"></div>
      <div class="mt-1 mb-2">
        <p class="text-sm text-gray-500">
          <a
            :href="'/profiles/' + thread.owner.name"
            class="text-blue-400 text-sm hover:text-underline hover:text-blue-600"
            >{{ thread.owner.name }}</a
          >&nbsp;tarafından oluşturuldu.&nbsp;{{ thread.visits_count }} kez
          görüntülendi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thread: {
      type: Object,
    },
  },
  methods: {
    href(thread) {
      window.location.href =
        "/threads/" + thread.channel.slug + "/" + thread.slug;
    },
  },
};
</script>
