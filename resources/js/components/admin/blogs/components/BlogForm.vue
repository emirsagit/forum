<template>
  <div
    class="bg-white w-full sm:w-2/3 flex flex-col sm:m-auto p-1 md:p-4 absulate"
  >
    <div class="flex justify-center">
      <form
        class="bg-white w-full rounded pr-1 md:p-6 mb-4"
        @submit.prevent="onSubmit()"
      >
        <p
          class="text-2xl text-teal-700 font-semibold mb-2"
          v-text="dataBlog ? 'Blog Sayfası Düzenle' : 'Yeni Blog Sayfası'"
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
            v-bind:class="{
              'border-red-500': this.errors.hasOwnProperty('channel_id'),
            }"
            v-model="channel_id"
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
          <p
            class="text-red-500 text-xs italic"
            v-text="this.errors['channel_id']"
            v-if="this.errors.hasOwnProperty('channel_id')"
          ></p>
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Başlık
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{
              'border-red-500': this.errors.hasOwnProperty('title'),
            }"
            type="text"
            placeholder="Başlık"
            v-model="title"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="this.errors['title']"
            v-if="this.errors.hasOwnProperty('title')"
          ></p>
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Kısa Özet
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Kısa Özet"
            v-model="summary"
          />
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Ana Fotoğraf (Tercihen 4:3)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{
              'border-red-500': this.errors.hasOwnProperty('image'),
            }"
            type="file"
            id="file"
            ref="file"
            @change="handleFileUpload"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="this.errors['image']"
            v-if="this.errors.hasOwnProperty('image')"
          ></p>
        </div>

        <div class="flex overflow-hidden my-1" v-if="imagePath">
          <img
            class="h-20 w-20 text-white shadow-solid m-auto"
            :src="imagePath"
          />
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Ana Sayfa Slider'da Göster
          </label>
          <input
            class="checked:bg-blue-600 checked:border-transparent"
            type="checkbox"
            v-model="slider"
          />
        </div>

        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="body">
            İçerik
          </label>
          <js-editor
            @onInitialized="onInitialized"
            :default="body"
            :image="true"
          ></js-editor>
        </div>
        <p
          class="text-red-500 text-xs italic"
          v-text="this.errors['body']"
          v-if="this.errors.hasOwnProperty('body')"
        ></p>

        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="blog_title"
          >
            Başlık Title (seo)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="blog_title"
            type="text"
            name="blog_title"
            placeholder="Başlık"
            v-model="blog_title"
          />
        </div>

        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="blog_description"
          >
            Başlık Description (seo)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="blog_description"
            type="text"
            name="blog_description"
            placeholder="Başlık"
            v-model="blog_description"
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
import JsEditor from "../../../shared/JsEditor.vue";

export default {
  props: ["dataBlog"],
  components: {
    JsEditor,
  },
  data() {
    return {
      blog: this.dataBlog ? this.dataBlog : "",
      title: this.dataBlog ? this.dataBlog.title : "",
      channel_id: this.dataBlog ? this.dataBlog.channel_id : "",
      body: this.dataBlog ? this.dataBlog.editors_data : "",
      summary: this.dataBlog ? this.dataBlog.summary : "",
      blog_title: this.dataBlog ? this.dataBlog.blog_title : "",
      blog_description: this.dataBlog ? this.dataBlog.blog_description : "",
      slider: this.dataBlog ? this.dataBlog : false,
      imagePath: this.dataBlog ? "/storage/" + this.dataBlog.image : "",
      image: "",
      formData: new FormData(),

      channels: "",
      editor: "",
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
          this.formData.append("title", this.title);
          this.formData.append("summary", this.summary);
          this.formData.append("channel_id", this.channel_id);
          this.formData.append("slider", this.slider);
          this.formData.append("blog_title", this.blog_title);
          this.formData.append("blog_description", this.blog_description);
          this.formData.append("body", JSON.stringify(this.body));
          this.formData.append("image", this.image);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    async onSubmit() {
      await this.editorSave();
      if (!this.dataBlog) {
        axios
          .post("/admin/blogs", this.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
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
          .post(`/admin/blogs/${this.dataBlog.slug}`, this.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
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