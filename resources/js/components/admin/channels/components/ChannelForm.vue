<template>
  <form
    class="bg-gray-100 p-1 md:p-4 rounded-lg mb-2 flex flex-col w-full my-4 lg:w-2/3"
    v-show="displayForm"
  >
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Konu Başlığı
      </label>
      <input
        type="text"
        class="bg-gray-200 text-lg rounded-lg px-2 py-1 border mr-2 flex flex-col w-full items-center"
        v-model="name"
        placeholder="Konu Girin"
        v-bind:class="formError ? 'border-red-500' : 'border-blue-500'"
        @keydown="formError = false"
      />
      <p
        class="text-red-500 text-xs italic"
        v-text="formError"
        v-if="formError"
      ></p>
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2"> Renk </label>
      <select
        class="block appearance-none text-sm rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer mr-2 px-2 py-2 mt-2"
        :class="
          color === 'random'
            ? 'bg-white text-gray-700'
            : 'bg-' + color + '-600 text-white'
        "
        id="grid-state"
        v-model="color"
      >
        <option value="random">Random</option>
        <option v-for="color in colors" :value="color">{{ color }}</option>
      </select>
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Konu Title
      </label>
      <input
        type="text"
        class="bg-gray-200 text-lg rounded-lg px-2 py-1 border mr-2 flex flex-col w-full items-center border-blue-500"
        v-model="channel_title"
        placeholder="Title Girin"
      />
    </div>
    <div class="mb-2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Konu Description
      </label>
      <input
        type="text"
        class="bg-gray-200 text-lg rounded-lg px-2 py-1 border mr-2 flex flex-col w-full items-center border-blue-500"
        v-model="channel_description"
        placeholder="Description Girin"
      />
    </div>
    <div class="mb-2">
      <button
        class="bg-teal-800 hover:bg-teal-700 text-white rounded-lg px-2 py-1 mr-2 mt-2"
        type="submit"
        @click.prevent="save"
      >
        Kaydet
      </button>
      <button
        class="bg-gray-200 hover:bg-gray-100 rounded-lg px-2 py-1 mt-2"
        @click.prevent="reset"
      >
        Geri
      </button>
    </div>
  </form>
</template>

<script>
import colors from "../../../../mixins/colors.js";
export default {
  mixins: [colors],
  props: ["displayForm", "dataChannel"],
  data() {
    return {
      name: "",
      color: "random",
      channel_title: "",
      channel_description: "",
      formError: "",
    };
  },
  watch: {
    dataChannel() {
      this.name = this.dataChannel.name;
      this.color = this.dataChannel.color;
      this.channel_title = this.dataChannel.channel_title;
      this.channel_description = this.dataChannel.channel_description;
    },
  },
  methods: {
    save() {
      if (this.color === "random") {
        this.color = this.randomColor; //mixin
      }
      console.log(this.color);
      if (this.dataChannel) {
        axios
          .patch("/admin/channels/" + this.dataChannel.slug, {
            name: this.name,
            color: this.color,
            channel_title: this.channel_title,
            channel_description: this.channel_description,
          })
          .then((response) => {
            window.flash("Güncelleme Başarılı");
            const index = this.$parent.channels.findIndex(
              (el) => el.id === response.data.id
            );
            Vue.set(this.$parent.channels, index, response.data);
            this.reset();
          });
      } else {
        axios
          .post("/admin/channels", {
            name: this.name,
            color: this.color,
            channel_title: this.channel_title,
            channel_description: this.channel_description,
          })
          .then((response) => {
            this.$parent.channels.unshift(response.data);
            this.reset();
            flash("Konu Kaydedildi");
          })
          .catch((error) => {
            flash(
              (this.formError = error.response.data.errors.name[0]),
              "error"
            );
          });
      }
    },
    reset() {
      this.$parent.displayForm = false;
      this.$parent.channel = "";
      this.name = "";
      this.formError = "";
    },
  },
};
</script>
