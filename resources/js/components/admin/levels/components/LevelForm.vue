<template>
  <div
    class="bg-white w-full sm:w-2/3 flex flex-col sm:m-auto p-1 md:p-4 absulate"
  >
    <div class="flex justify-center">
      <form
        class="bg-white w-full rounded pr-1 md:p-6 mb-4"
        @submit.prevent="onSubmit()"
      >
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Seviye Adı
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             v-bind:class="{
              'border-red-500': errors.hasOwnProperty('name'),
            }"
            type="text"
            placeholder="Seviye Adı"
            v-model="name"
          />
         <p
            class="text-red-500 text-xs italic"
            v-text="errors['name']"
            v-if="errors.hasOwnProperty('name')"
          ></p>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="body">
            Kısa Tanıtım
          </label>
          <js-editor
            @onInitialized="onInitialized"
            :default="editors_data"
          ></js-editor>
          <p
            class="text-red-500 text-xs italic"
            v-text="errors['body']"
            v-if="errors.hasOwnProperty('body')"
          ></p>
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Ana Fotoğraf
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             v-bind:class="{
              'border-red-500': errors.hasOwnProperty('image'),
            }"
            type="file"
            id="file"
            ref="file"
            @change="handleFileUpload"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="errors['image']"
            v-if="errors.hasOwnProperty('image')"
          ></p>
        </div>

        <div class="flex overflow-hidden my-1" v-if="imagePath">
          <img
            class="h-20 w-20 text-white shadow-solid m-auto"
            :src="imagePath"
          />
        </div>

        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="thread_title"
          >
            SeoTitle
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="seo_title"
            placeholder="SeoTitle"
            v-model="seo_title"
          />
        </div>

        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="thread_title"
          >
            SeoDescription
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="seo_description"
            placeholder="seo_description"
            v-model="seo_description"
          />
        </div>
        <div class="flex items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
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
  components: {
    JsEditor,
  },
  props: ["dataLevel", "dataLevels"],

  data() {
    return {
      name: this.dataLevel ? this.dataLevel.name : "",
      body: this.dataLevel ? this.dataLevel.body : "",
      seo_title: this.dataLevel ? this.dataLevel.seo_title : "",
      seo_description: this.dataLevel ? this.dataLevel.seo_description : "",
      editor: "",
      editors_data: this.dataLevel ? this.dataLevel.editors_data : "",
      imagePath: this.dataLevel ? "/storage/" + this.dataLevel.image : "",
      image: "",
      formData: new FormData(),
      errors: "",
    };
  },

  methods: {
    onInitialized(editor) {
      this.editor = editor;
    },
    handleFileUpload() {
      this.image = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.$refs.file.files[0]);
      reader.onload = (event) => {
        this.imagePath = event.target.result;
      };
    },
    async editorSave() {
      await this.editor
        .save()
        .then((outputData) => {
          this.body = outputData;
          this.formData.append("body", JSON.stringify(this.body));
          this.formData.append("name", this.name);
          this.formData.append("seo_title", this.seo_title);
          this.formData.append("seo_description", this.seo_description);
          this.formData.append("image", this.image);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    async onSubmit() {
      await this.editorSave();
      if (!this.dataLevel) {
        axios
          .post("/admin/levels", this.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            flash("Yorumunuz Kaydedildi");
            this.$emit("created", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            flash(error.message, "error");
          });
      } else {
        this.formData.append("_method", "PATCH");
        axios
          .post(`/admin/levels/${this.dataLevel.slug}`, this.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            flash("Yorumunuz Kaydedildi");
            this.$emit("updated", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            flash(error.message, "error");
          });
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
