<template>
  <div
    class="w-screen h-screen fixed top-0 right-0 bg-gray-800 bg-opacity-75 flex justify-center m-auto z-50"
    v-if="login"
  >
    <div
      class="bg-white w-screen h-screen sm:w-1/2 lg:w-1/3 overflow-auto sm:h-auto flex flex-col sm:m-auto p-4 sm:rounded-xl"
    >
      <div class="flex justify-center flex-col">
        <div class="flex flex-row mb-2 justify-between">
          <h3 class="font-bold text-xl ml-2">Giriş</h3>
          <p
            class="text-red-500 hover:text-red-700 cursor-pointer font-bold"
            @click="loginHide()"
          >
            X
          </p>
        </div>
        <form
          class="bg-white rounded p-4"
          @submit.prevent="onSubmit()"
          @keydown="form.errors.clear($event.target.name)"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Mail Adresiniz
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{
                'border-red-500': form.errors.has('email') || emailProblem,
              }"
              id="email"
              type="text"
              placeholder="Mail Adresiniz"
              email="email"
              v-model="form.email"
              @keydown="emailProblem = ''"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('email') || emailProblem"
              v-if="form.errors.has('email') || emailProblem"
            ></p>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Parola
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{ 'border-red-500': form.errors.has('password') }"
              id="password"
              type="password"
              placeholder="password"
              email="password"
              v-model="form.password"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('password')"
              v-if="form.errors.has('password')"
            ></p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              v-bind:class="{
                'cursor-not-allowed opacity-50': form.errors.has(),
              }"
            >
              Kaydet
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
              @click="forgatPassword"
            >
              Parolamı unuttum
            </a>
          </div>
          <a
            class="cursor-pointer mt-4 inline-block align-baseline text-sm text-gray-500"
            @click="registerRequest"
          >
            Üye değil misiniz?<span
              class="align-baseline text-sm text-blue-500 hover:text-blue-800"
            >
              Üyemiz olun</span
            >
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../dependencies/form.js";
export default {
  props: {
    login: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: "login",
      emailProblem: "",
      form: new Form({
        email: "",
        password: "",
      }),
    };
  },
  methods: {
    onSubmit() {
      this.form
        .submit("post", "/login")
        .then((data) => {
          flash("Hoşgeldiniz");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    },
    loginHide() {
      window.toggle("login", false);
    },
    registerRequest() {
      window.toggle("register", true);
    },
    forgatPassword() {
      axios
        .post("/password/email", {
          email: this.form.email,
        })
        .then((response) => {
          window.flash("Doğrulama maili gönderildi");
          this.loginHide();
        })
        .catch((error) => {
          this.emailProblem = error.response.data.errors.email[0];
        });
    },
  },
  mounted() {
    if (this.$signIn) return;

    var pageURL = window.location.href;
    if (pageURL.substr(pageURL.lastIndexOf("/") + 1) == "login") {
      window.toggle("login", true);
    }
  },
};
</script>
