<template>
  <div class="sm:w-1/2 flex flex-col sm:m-auto pb-24">
    <div
      class="flex justify-center lg:mt-4 bg-white lg:p-2 rounded-lg shadow-lg"
    >
      <form
        class="bg-white w-full rounded lg:p-4 p-2 mb-4"
        @submit.prevent="onSubmit()"
        @keydown="form.errors.clear($event.target.name)"
      >
        <div class="mb-2">
          <div v-if="!$signedIn" class="flex lg:flex-row flex-col items-center justify-between">
             <p class="text-red-600">Paylaşım yapmak, sorunsal bildirmek için lütfen giriş yapın ya da kayıt olun</p>
             <div class="flex flex-row">
               <signin-button></signin-button>
               <register-button></register-button>
             </div>
          </div>
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
          <js-editor @onInitialized="onInitialized"></js-editor>
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
        <recaptcha :sitekey="recapthcaSiteKey" @input="change" />
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('recaptcha')"
          v-if="form.errors.has('recaptcha')"
        ></p>
        <br />
        <div class="flex items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            v-bind:class="{
              'cursor-not-allowed opacity-50': form.errors.has(),
            }"
          >
            Gönder
          </button>
          <a
            href="/"
            class="bg-gray-100 hover:bg-gray-200 font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Geri
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "../../dependencies/form.js";
import Recaptcha from "../../shared/Recaptcha.vue";
import JsEditor from "../../shared/JsEditor.vue";
import SigninButton from "../../auth/SigninButton.vue"
import RegisterButton from "../../auth/RegisterButton.vue"

export default {
  props: ["recapthcaSiteKey"],
  components: {
    Recaptcha,
    JsEditor,
    RegisterButton,
    SigninButton
  },
  data() {
    return {
      form: new Form({
        title: "",
        body: "",
        channel_id: "",
        recaptcha: "",
      }),
      channels: {},
      editor: "",
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
        .submit("post", "/threads", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => flash("Konu kaydedildi."))
        .catch((error) => {
          grecaptcha.reset();
          flash(
            error.errors.recaptcha ? error.errors.recaptcha[0] : error.message,
            "error"
          );
        });
    },
    change(response) {
      this.form.recaptcha = response;
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
    if (!this.$signedIn) {
      window.toggle("register", true);
    }
  },
};
</script>