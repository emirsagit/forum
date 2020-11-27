<template>
  <div class="flex flex-col w-full mb-4">
    <div class="flex justify-center">
      <form
        class="w-full rounded"
        @submit.prevent="onSubmit()"
        @keydown="form.errors.clear($event.target.name)"
      >
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="channel_id"
          >
            Konu
          </label>
          <select
            class="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline leading-tight"
            id="grid-state"
            name="channel_id"
            v-bind:class="{
              'border-red-500': form.errors.has('channel_id'),
            }"
            v-model="form.channel_id"
            @change="form.errors.clear($event.target.name)"
          >
            <option :value="channel.id" selected="true">
              {{ channel.name }}
            </option>
            <option
              v-for="channel in channels"
              :value="channel.id"
              :key="channel.id"
            >
              {{ channel.name }}
            </option>
          </select>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Başlık
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('title') }"
            id="title"
            type="text"
            name="title"
            placeholder="Başlık"
            v-model="form.title"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('title')"
            v-if="form.errors.has('title')"
          ></p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="body">
            İçerik
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('body') }"
            type="text"
            placeholder="İçerik"
            name="body"
            v-model="form.body"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('body')"
            v-if="form.errors.has('body')"
          ></p>
        </div>
        <div class="flex items-center justify-end">
          <a
            class="px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-300 mr-2 flex flex-row cursor-pointer"
            @click="$parent.updateFormActive = false"
          >
            Geri
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
          </a>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
            type="submit"
            v-bind:class="{
              'cursor-not-allowed opacity-50': form.errors.has(),
            }"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "../../../../dependencies/form.js";
export default {
  props: ["dataThread"],
  data() {
    return {
      form: new Form({
        title: this.dataThread.title,
        body: this.dataThread.body,
        channel_id: this.dataThread.channel_id,
      }),
      channels: {},
      channel: this.dataThread.channel,
    };
  },
  methods: {
    onSubmit() {
      this.form
        .submit("patch", "/threads/" + this.dataThread.slug)
        .then((data) => this.success())
        .catch((error) => {
          flash(error.message, "error");
        });
    },
    success() {
      flash("Konu kaydedildi.");
      this.channel = this.channels.find((channel) => {
        return channel.id == this.form.channel_id
      });
      this.$emit('updated', {form: this.form, channel: this.channel});
    }
  },
  mounted() {
    axios
      .get("/channels")
      .then((response) => {
        this.channels = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

