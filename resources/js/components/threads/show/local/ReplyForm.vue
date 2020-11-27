<template>
  <div
    class="flex fixed bottom-0 bg-white flex-col lg:w-3/5 w-screen lg:h-auto overflow-y-auto m-auto"
  >
    <form
      @submit.prevent="onSubmit()"
      @keydown="form.errors.clear($event.target.body)"
    >
      <div class="flex flex-col mb-4 items-center">
        <div class="flex flex-1 mb-2 text-gray-600">Yanıt Formu</div>
        <div class="flex flex-1 w-full flex-col p-4">
          <js-editor @onInitialized="onInitialized"></js-editor>
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('body')"
            v-if="form.errors.has('body')"
          ></p>
        </div>
      </div>
      <div class="flex items-center pb-4 pl-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline mr-2"
          type="submit"
          v-bind:class="{
            'cursor-not-allowed opacity-50': form.errors.has(),
          }"
        >
          Kaydet
        </button>
         <a
            class="flex px-2 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 cursor-pointer"
            @click.prevent="$parent.displayForm=false"
            >Geri</a
          >
      </div>
    </form>
  </div>
</template>

<script>
import Form from "../../../dependencies/form.js";
import JsEditor from "../../../shared/JsEditor.vue";

export default {
  components: {
    JsEditor,
  },
  props: {
    thread: {
      type: Object,
    },
  },
  data() {
    return {
      form: new Form({
        body: "",
      }),
      editor: "",
    };
  },
  methods: {
    onInitialized(editor) {
      this.editor = editor;
      console.log(this.editor);
    },
    async editorSave() {
      await this.editor
        .save()
        .then((outputData) => {
          this.form.body = outputData;
          console.log(this.form.body);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    async onSubmit() {
      await this.editorSave();
      this.form
        .submit("post", "/threads/" + this.thread.slug + "/replies", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          flash("Yorumunuz Kaydedildi");
          this.$emit("created", response);
          this.form.empty();
        })
        .catch((error) => {
          flash(error.message, "error");
        });
    },
    change(response) {
      this.form.recaptcha = response;
      console.log(this.form.recaptcha);
    },
  },
};
</script>
