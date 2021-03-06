<template>
  <div class="sm:w-1/2 flex flex-col sm:m-auto">
    <div class="flex justify-center rounded-lg shadow-lg bg-white lg:mt-4 lg:p-4">
      <form
        class="w-full p-2"
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
            class="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline leading-tight"
            id="grid-state"
            name="channel_id"
            v-bind:class="{ 'border-red-500': form.errors.has('channel_id') }"
            v-model="form.channel_id"
            @change="form.errors.clear($event.target.name)"
          >
            <option :value="form.channel_id" selected="true">
              {{ thread.channel.name }}
            </option>
            <option
              v-for="channel in channels"
              :value="channel.id"
              :key="channel.id"
            >
              {{ channel.name }}
            </option>
          </select>
           <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('channel_id')"
            v-if="form.errors.has('channel_id')"
          ></p>
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
          <js-editor
            @onInitialized="onInitialized"
            :default="thread.editors_data"
          ></js-editor>
          <!-- <VueTrix v-model="form.body" placeholder="İçerik" class="trix-content trix-editor "/> -->
          <!-- <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('body') }"
            type="text"
            placeholder="İçerik"
            name="body"
            v-model="form.body"
          /> -->
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('body')"
            v-if="form.errors.has('body')"
          ></p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
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
import Form from "../../dependencies/form.js";
import JsEditor from "../../shared/JsEditor.vue";

export default {
  props: ["dataThread"],
  components: {
    JsEditor,
  },
  data() {
    return {
      form: new Form({
        title: this.dataThread.title,
        body: "",
        channel_id: this.dataThread.channel_id,
      }),
      channels: {},
      editor: "",
      thread: this.dataThread,
    };
  },
  methods: {
    onInitialized(editor) {
      this.editor = editor;
    },
    async editorSave() {
      await this.editor
        .save()
        .then((outputData) => {
          this.form.body = outputData;
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    async onSubmit() {
      await this.editorSave();
      this.form
        .submit("patch", "/threads/" + this.thread.slug)
        .then((data) => {
          this.submitted();
        })
        .catch((error) => {
          flash(error.message, "error");
        });
    },

    submitted() {
      window.location.href = '/';
      flash("Konu kaydedildi.");
    },
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