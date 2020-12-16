<template>
  <div class="flex flex-row flex-wrap mb-2 justify-between mx-2">
    <div class="flex flex-row flex-wrap mb-2 justify-between">
      <select
        class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 text-sm rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer mr-4 px-2 py-2"
        id="grid-state"
        @change="fetch()"
        v-model="selected"
      >
        <option value="all">Tüm Konular</option>
        <option
          v-for="channel in channels"
          :key="channel.id"
          v-text="channel.name"
          :value="channel"
        ></option>
      </select>
      <select
        class="flex flex-row items-center appearance-none bg-gray-200 border border-gray-200 text-sm text-gray-700 rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer px-2 py-1"
        id="grid-state"
        @change="onChange($event)"
      >
        <option value="last">En Yeni</option>
        <option value="popular">Populer</option>
        <option value="unanswered">Yanıtlanmamış</option>
      </select>
    </div>
    <a
      @click="newThreadRequest"
      class="hidden px-4 py-2 max-content text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white rounded-lg text-center cursor-pointer md:block appearance-none border leading-none lg:leading-tight"
      >Yeni Konu</a
    >
  </div>
</template>

<script>
export default {
  props: ["channels", "selectedChannel"],
  data() {
    return {
      selected: "all",
    };
  },
  watch: {
    selectedChannel() {
      this.selected = this.selectedChannel;
    },
  },
  methods: {
    onChange(event) {
      this.$emit("filter", event.target.value);
    },
    fetch() {
      if (this.selected === "all") {
        window.location.href = "/threads";
      } else {
        this.$emit("selected", this.selected);
      }
    },
    newThreadRequest() {
      if (App.signedIn) {
        window.location.href = "/threads/create";
      } else {
        window.toggle("login", true);
      }
    },
  },
};
</script>
