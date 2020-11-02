<template>
  <div class="flex flex-col w-full">
    <form
      @submit.prevent="onSubmit()"
      @keydown="form.errors.clear($event.target.body)"
    >
      <div class="flex flex-col mb-4 items-center">
        <div class="flex flex-1 mb-2 text-gray-600">Yanıt Formu</div>
        <div class="flex flex-1 w-full flex-col">
          <textarea
            class="resize-y w-full border rounded focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('body') }"
            id="body"
            type="text"
            placeholder="Mesajı Yaz"
            name="body"
            v-model="form.body"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('body')"
            v-if="form.errors.has('body')"
          ></p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          v-bind:class="{
            'cursor-not-allowed opacity-50': form.errors.has(),
          }"
        >
          Mesajı Gönder
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Form from "../../../dependencies/form.js";
export default {
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
    };
  },
  methods: {
    onSubmit() {
      this.form
        .submit("post", "/threads/" + this.thread.id + "/replies")
        .then((response) => {
          flash('Yorumunuz Kaydedildi');
          this.$emit('created', response);
          this.form.empty();
        })
        .catch((error) => {
           flash(error.message, "error");
        });
    },
  },
};
</script>
