<template>
  <div class="bg-white flex flex-col sm:m-auto m-1 lg:p-4 h-auto">
    <h2 class="text-lg mb-2 text-indigo-500 text-center">
      Genel Site Ayarları
    </h2>

    <div class="flex flex-col m-auto">
      <file-upload @initialUpload="persist"></file-upload>
      <div class="flex overflow-hidden my-1 flex-row items-end" v-if="logo">
        <img class="h-10 w-25 text-white shadow-solid m-auto" :src="logo" />
        <button
          class="text-red-500 hover:text-red-600 ml-2"
          @click="destroy"
          v-if="logo"
        >
          Sil
        </button>
      </div>
    </div>

    <form
      class="bg-white w-full rounded h-full"
      @submit.prevent="submit()"
      @keydown="form.errors.clear($event.target.name)"
    >
      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Logo Başlık
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('logo_title') }"
          type="text"
          placeholder="Anasayfa Başlık"
          v-model="form.logo_title"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('logo_title')"
          v-if="form.errors.has('logo_title')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Anasayfa H1 Başlık
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('home_h1') }"
          type="text"
          placeholder="Anasayfa Başlık"
          v-model="form.home_h1"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('home_h1')"
          v-if="form.errors.has('home_h1')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Facebook Linki (Url'den kopyala yapıştır)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('facebook') }"
          type="text"
          placeholder="Facebook"
          v-model="form.facebook"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('facebook')"
          v-if="form.errors.has('facebook')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Twitter Linki (Url'den kopyala yapıştır)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('twitter') }"
          type="text"
          placeholder="Twitter"
          v-model="form.twitter"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('twitter')"
          v-if="form.errors.has('twitter')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Instagram Linki (Url'den kopyala yapıştır)
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('instagram') }"
          type="text"
          placeholder="Instagram"
          v-model="form.instagram"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('instagram')"
          v-if="form.errors.has('instagram')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="about">
          Hakkımızda
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('about') }"
          type="text"
          placeholder="Hakkımızda"
          v-model="form.about"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('about')"
          v-if="form.errors.has('about')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Anasayfa Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('home_title') }"
          type="text"
          placeholder="Anasayfa Başlık"
          v-model="form.home_title"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('home_title')"
          v-if="form.errors.has('home_title')"
        ></p>
      </div>

      <div class="mb-2">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Anasayfa Description
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-bind:class="{
            'border-red-500': form.errors.has('home_description'),
          }"
          type="text"
          placeholder="Anasayfa Description"
          v-model="form.home_description"
        />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('home_description')"
          v-if="form.errors.has('home_description')"
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
      </div>
    </form>
  </div>
</template>

<script>
import Form from "../../dependencies/form.js";
import FileUpload from "./FileUpload.vue";
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      setting: "",
      logo: "",
      form: new Form({
        home_h1: "",
        home_title: "",
        home_description: "",
        logo_title: "",
        instagram: "",
        twitter: "",
        facebook: "",
        about: "",
      }),
    };
  },
  mounted() {
    axios.get("/admin/settings").then((response) => {
      this.setting = response.data;
      this.form.home_h1 = response.data.home_h1;
      this.form.logo_title = response.data.logo_title;
      this.form.home_title = response.data.home_title;
      this.form.home_description = response.data.home_description;
      this.form.instagram = response.data.instagram;
      this.form.twitter = response.data.twitter;
      this.form.facebook = response.data.facebook;
      this.form.about = response.data.about;
      this.logo = response.data.logo ? "/storage/" + response.data.logo : "";
    });
  },
  methods: {
    destroy() {
      axios.delete("/admin/settings/" + this.setting.id).then((response) => {
        this.logo = "";
        flash("logo silindi");
      });
    },
    submit() {
      this.form
        .submit("post", "/admin/settings", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => flash("Konu kaydedildi."))
        .catch((error) => {
          flash(error.message, "error");
        });
    },
    persist(data) {
      let form = new FormData();
      form.append("logo", data.logo);
      axios
        .post("/admin/settings/upload", form)
        .then((response) => {
          flash("Logo Kaydedildi");
          this.logo = data.primitiveLogo;
        })
        .catch((error) => {
          flash(error.response.data.errors.logo[0], "error");
        });
    },
  },
};
</script>