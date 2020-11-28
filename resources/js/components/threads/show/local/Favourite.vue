<template>
  <!-- if($reply->favourites_count > 0) -->
  <div class="flex flex-row">
    <p
      class="text-red-600 flex flex-row items-center"
      v-show="favouritesCount > 0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {{ favouritesCount }}
    </p>
    <div
      class="text-gray-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer"
      :class="classes"
      @click="toggle()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <p>Beğen</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      return this.isFavourited ? "text-blue-600" : "";
    },
    endpoint() {
      return "/threads/" + this.reply.id + "/favourites";
    },
  },
  data() {
    return {
      favouritesCount: this.reply.favouritesCount,
      isFavourited: this.reply.isFavourited,
    };
  },
  props: ["reply"],
  methods: {
    toggle() {
      this.isFavourited ? this.destroy() : this.create();
    },
    create() {
      axios.post(this.endpoint);
      this.isFavourited = true;
      this.favouritesCount++;
    },
    destroy() {
      axios.delete(this.endpoint);
      this.isFavourited = false;
      this.favouritesCount--;
    },
  },
};
</script>

