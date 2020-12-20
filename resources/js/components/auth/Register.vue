<template>
  <div
    class="w-screen h-screen fixed top-0 right-0 bg-gray-800 bg-opacity-75 flex justify-center m-auto z-50"
    v-if="register"
  >
    <div
      class="bg-white w-screen h-screen sm:w-1/2 lg:w-1/3 flex flex-col sm:m-auto p-4 sm:rounded-xl overflow-auto"
    >
      <div class="flex justify-center flex-col">
        <div class="flex flex-row mb-2 justify-between">
          <h3 class="font-bold text-xl ml-2">Kayıt Ol</h3>
          <p
            class="text-red-500 hover:text-red-700 cursor-pointer font-bold"
            @click="registerHide()"
          >
            X
          </p>
        </div>
        <p class="ml-2 text-teal-700 text-sm">
          Forumda konunun uzmanlarına soru sormak, paylaşım yapmak daima
          ücretsizdir. Ancak sitemizi spam içerikten korumak için üyelik
          sisteminden başka bir yol bulamadık. Zaman ayırdığınız için
          teşekkürler...
        </p>
        <form
          class="bg-white rounded px-4 py-4"
          @submit.prevent="onSubmit()"
          @keydown="form.errors.clear($event.target.name)"
        >
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Adınız
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{ 'border-red-500': form.errors.has('name') }"
              id="name"
              type="text"
              placeholder="Adınız"
              name="name"
              v-model="form.name"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('name')"
              v-if="form.errors.has('name')"
            ></p>
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Kullanıcı Adı
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{ 'border-red-500': form.errors.has('username') }"
              id="username"
              type="text"
              placeholder="Kullanıcı Adınız"
              name="username"
              v-model="form.username"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('username')"
              v-if="form.errors.has('username')"
            ></p>
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Mail Adresiniz
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{ 'border-red-500': form.errors.has('email') }"
              id="email"
              type="text"
              placeholder="Mail Adresiniz"
              name="email"
              v-model="form.email"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('email')"
              v-if="form.errors.has('email')"
            ></p>
          </div>
          <div class="mb-2">
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
              placeholder="Parola"
              name="password"
              v-model="form.password"
            />
            <p
              class="text-red-500 text-xs italic"
              v-text="form.errors.get('password')"
              v-if="form.errors.has('password')"
            ></p>
          </div>
          <div class="mb-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Parola Tekrarı
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-bind:class="{ 'border-red-500': form.errors.has('password') }"
              id="password_confirmation"
              type="password"
              placeholder="Parola Onayı"
              name="password_confirmation"
              v-model="form.password_confirmation"
            />
          </div>
          <div class="flex items-center justify-between">
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
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Parolamı unuttum
            </a>
          </div>
          <a
            class="cursor-pointer mt-4 inline-block align-baseline text-sm text-gray-500"
            @click="loginRequest"
          >
            Üye misiniz?<span
              class="align-baseline text-sm text-blue-500 hover:text-blue-800"
            >
              Giriş yapın</span
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
    register: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: new Form({
        email: "",
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
      }),
      name: "register",
    };
  },
  methods: {
    onSubmit() {
      this.form
        .submit("post", "/register")
        .then((data) => {
          window.location.reload();
          flash("Kayıt Başarılı");
        })
        .catch((error) => console.log(error));
    },
    registerHide() {
      window.toggle("register", false);
    },
    loginRequest() {
      this.registerHide();
      window.toggle("login", true);
    },
  },
};
</script>
