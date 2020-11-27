<template>
  <div class="flex flex-row w-full">
    <div
      class="text-gray-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1"
      v-show="!displayForms"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <button type="submit" @click.prevent="changeDisplay">Yanıtla</button>
    </div>
    <div class="flex flex-1 flex-col" v-show="displayForms">
      <form @submit.prevent="changeBody()" class="flex flex-1 flex-col">
        <textarea
          required
          class="resize-y w-full border rounded focus:outline-none focus:shadow-outline"
          v-bind:class="{ 'border-red-500': form.errors.has('body') }"
          name="body"
          v-html="form.body"
          v-model="form.body"
        ></textarea>
        <p
          class="text-red-500 text-xs italic"
          v-text="form.errors.get('body')"
          v-if="form.errors.has('body')"
        ></p>
        <div class="flex flex-row mt-2">
          <a
            class="flex px-2 py-1 bg-gray-400 rounded text-sm text-white hover:bg-gray-600 mr-1 cursor-pointer"
            @click.prevent="changeDisplay"
            >Geri</a
          >
          <button
            class="flex px-2 py-1 bg-blue-400 rounded text-sm text-white hover:bg-blue-600"
            type="submit"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "../../../dependencies/form.js";
export default {
  props: ["reply", "displayForms"],
  data() {
    return {
      form: new Form({
        body: "@" + this.reply.owner.name + "  ",
      }),
    };
  },
  methods: {
    changeBody() {
      this.form
        .submit("post", "/threads/" + this.reply.thread.slug + "/replies")
        .then((response) => {
          flash("Yorumunuz Kaydedildi");
          this.$emit("created", response);
          this.form.empty();
        })
        .catch((error) => {
          flash(error.message, "error");
        });
    },
    changeDisplay() {
      this.$emit("changeDisplay");
    },
  },
};
</script>

