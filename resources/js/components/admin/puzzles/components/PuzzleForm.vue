<template>
  <div class="bg-white w-full flex flex-col sm:m-auto p-1 md:p-4 absulate">
    <div class="flex justify-center">
      <form
        class="bg-white w-full rounded pr-1 md:p-6 mb-4"
        @submit.prevent="onSubmit()"
        @keydown="form.errors.clear($event.target.name)"
      >
        <p
          class="text-2xl text-teal-700 font-semibold mb-2"
          v-text="dataPuzzle ? 'Bilmece Düzenle' : 'Yeni Bilmece'"
        ></p>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Seviye
          </label>
          <multiselect
            v-model="form.levels"
            :options="options"
            class="cursor-pointer"
            placeholder="Seçiniz"
            :multiple="true"
            :close-on-select="false"
            track-by="id"
            label="name"
          ></multiselect>
        </div>
        <div class="mb-2">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Soru
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('question') }"
            type="text"
            placeholder="Bilmece"
            v-model="form.question"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('question')"
            v-if="form.errors.has('question')"
          ></p>
        </div>
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="thread_title"
          >
            Yanıt
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': form.errors.has('answer') }"
            type="text"
            name="answer"
            placeholder="Yanıt"
            v-model="form.answer"
          />
          <p
            class="text-red-500 text-xs italic"
            v-text="form.errors.get('answer')"
            v-if="form.errors.has('answer')"
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
import Multiselect from "vue-multiselect";

export default {
  props: ["dataPuzzle", "dataLevels"],
  components: {
    Multiselect,
  },

  data() {
    return {
      form: new Form({
        question: this.dataPuzzle ? this.dataPuzzle.question : "",
        answer: this.dataPuzzle ? this.dataPuzzle.answer : "",
        levels: this.dataPuzzle ? this.dataPuzzle.levels : [],
      }),
      options: this.dataLevels,
    };
  },

  methods: {
    onSubmit() {
      this.form
        .submit(
          this.dataPuzzle ? "patch" : "post",
          this.dataPuzzle
            ? "/admin/puzzles/" + this.dataPuzzle.id
            : "/admin/puzzles",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          flash("Kayıt Başarılı");
          this.dataPuzzle
            ? this.$emit("updated", response)
            : this.$emit("created", response);
        })
        .catch((error) => {
          flash(error.message, "error");
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
