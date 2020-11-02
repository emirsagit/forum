<template>
  <div :id="'reply-' + id" class="flex my-2 pl-2">
    <div class="flex mr-2">1</div>
    <div class="flex flex-1 mr-2">
      <div class="flex flex-col w-full">
        <div class="flex items-center mb-2">
          <a :href="'/profiles/' + reply.owner.name">
            <h4 class="font-bold text-l cursor-pointer hover:underline">
              {{ reply.owner.name }}
            </h4>
          </a>
          <p class="text-xs text-gray-500 ml-2 flex-1">
            {{ reply.created_at }}
          </p>
        </div>
        <p class="text-sm text-gray-700 mb-2" v-html="form.body"></p>
        <div class="flex flex-row">
          <favourite :reply="reply" :display="displayTextarea"></favourite>

          <div class="flex flex-1 justify-end" v-show="reply.can.update">
            <!-- update -->

            <div class="flex flex-1 flex-col">
              <form @submit.prevent="changeBody()">
                <textarea
                  required
                  class="resize-y w-full border rounded focus:outline-none focus:shadow-outline"
                  v-bind:class="{ 'border-red-500': form.errors.has('body') }"
                  name="body"
                  v-text="form.body"
                  v-show="displayTextarea"
                  v-model="form.body"
                ></textarea>
                <div class="flex flex-row mt-2">
                  <a
                    class="flex px-2 py-1 bg-gray-400 rounded text-sm text-white hover:bg-gray-600 mr-1 cursor-pointer"
                    v-show="displayTextarea"
                    @click="reset()"
                    >Geri</a
                  >
                  <button
                    class="flex px-2 py-1 bg-blue-400 rounded text-sm text-white hover:bg-blue-600"
                    v-show="displayTextarea"
                    type="submit"
                  >
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
            <!-- endupdate -->

            <button
              class="flex px-2 py-1 bg-blue-400 rounded text-sm text-white hover:bg-white hover:text-blue-800 mr-1"
              v-show="!displayTextarea"
              @click="displayTextarea = true"
            >
              Düzenle
            </button>

            <button
              class="flex px-2 py-1 bg-red-400 rounded text-sm text-white hover:bg-white hover:text-red-800"
              v-show="!displayTextarea"
              @click.prevent="destroy()"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "../../../dependencies/form.js";
import Favourite from "./Favourite.vue";
export default {
  props: ["reply"],
  components: {
    Favourite,
  },
  data() {
    return {
      form: new Form({
        body: this.reply.body,
      }),
      displayTextarea: false,
      originalReply: "",
      id: this.reply.id,
    };
  },
  created() {
    this.originalReply = this.reply;
  },
  methods: {
    changeBody() {
      this.form
        .submit("patch", "/replies/" + this.reply.id)
        .then((data) => this.success())
        .catch((error) => {
          flash(error.errors.body[0] ? error.errors.body[0] : error.message, "error");
        });
    },
    success() {
      flash("Yorumunuz Kaydedildi");
      this.displayTextarea = false;
    },
    destroy() {
      axios
        .post("/replies/" + this.reply.id, { _method: "delete" })
        .then(function (response) {
          flash("Yorumunuz Silindi");
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$emit("deleted", this.id);
    },
    reset() {
      this.displayTextarea = false;
      this.form.body = this.originalReply.body;
    },
  },
};
</script>

