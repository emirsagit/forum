<template>
  <div
    class="bg-white w-full sm:w-2/3 flex flex-col sm:m-auto p-1 md:p-4 absulate"
  >
    <div class="flex justify-center">
      <form
        class="bg-white w-full rounded pr-1 md:p-6 mb-4"
        @submit.prevent="onSubmit()"
        @keydown="form.errors.clear($event.target.name)"
      >
        <p
          class="text-2xl text-teal-700 font-semibold mb-2"
          v-text="
            dataThread ? 'Form Sayfası Düzenle' : 'Yeni Forum Sayfası'
          "
        ></p>
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
            <option value="" selected="true">Seçiniz</option>
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
          <js-editor
            @onInitialized="onInitialized"
            :default="editors_data"
          ></js-editor>
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('body')"
            v-if="form.errors.has('body')"
          ></p>
        </div>
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="thread_title"
          >
            Başlık Title (seo)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('thread_title') }"
            id="thread_title"
            type="text"
            name="thread_title"
            placeholder="Başlık"
            v-model="form.thread_title"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('thread_title')"
            v-if="form.errors.has('thread_title')"
          ></p>
        </div>
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="thread_description"
          >
            Başlık Description (seo)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{
              'border-red-500': form.errors.has('thread_description'),
            }"
            id="thread_description"
            type="text"
            name="thread_description"
            placeholder="Başlık"
            v-model="form.thread_description"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('title')"
            v-if="form.errors.has('title')"
          ></p>
        </div>
        <div class="flex items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            v-bind:class="{
              'cursor-not-allowed opacity-50': form.errors.has(),
            }"
          >
            Kaydet
          </button>
          <a
            class="bg-gray-100 hover:bg-gray-200 font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-2 cursor-pointer"
            @click="$emit('reset')"
          >
            Geri
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "../../../dependencies/form.js";
import JsEditor from "../../../shared/JsEditor.vue";

export default {
  props: ["dataThread"],
  components: {
    JsEditor,
  },
  data() {
    return {
      form: new Form({
        title: this.dataThread ? this.dataThread.title : "",
        body: this.dataThread ? this.dataThread.body : "",
        channel_id: this.dataThread ? this.dataThread.channel_id : "",
        thread_title: this.dataThread ? this.dataThread.thread_title : "",
        thread_description: this.dataThread
          ? this.dataThread.thread_description
          : "",
      }),
      channels: {},
      editor: "",
      editors_data: this.dataThread ? this.dataThread.editors_data : "",
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
        .submit(
          this.dataThread ? "patch" : "post",
          this.dataThread
            ? "/admin/threads/" + this.dataThread.slug
            : "/admin/threads",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          flash("Yorumunuz Kaydedildi");
          this.dataThread
            ? this.$emit("updated", response)
            : this.$emit("created", response);
        })
        .catch((error) => {
          flash(error.message, "error");
        });
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