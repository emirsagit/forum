<template>
  <div class="flex m-1 flex-col">
    <div class="flex flex-row my-2">
      <input
        type="search"
        class="bg-purple-white shadow rounded border-0 p-1 pl-2"
        placeholder="Ara..."
        v-model="search"
      />
      <svg
        version="1.1"
        class="h-4 text-dark mt-2 -ml-4 cursor-pointer hover:text-teal-600"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 52.966 52.966"
        style="enable-background: new 0 0 52.966 52.966"
        xml:space="preserve"
        @click="searchRequest"
      >
        <path
          d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
          c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
          C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
          S32.459,40,21.983,40z"
        />
      </svg>
    </div>
    <table class="border-collapse w-full" v-if="!displayForm">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Tarih
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Kullanıcı Adı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Adı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            E-Posta
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Engelle
          </th>
        </tr>
      </thead>
      <tbody v-for="(user, index) in users" :key="user.id">
        <admin-user :data-user="user"></admin-user>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminUser from "./components/AdminUser.vue";

export default {
  components: { AdminUser },
  props: ["dataUsers"],
  data() {
    return {
      users: this.dataUsers,
      displayForm: false,
      search: "",
    };
  },
  methods: {
    searchRequest() {
      axios
        .post("/admin/users/search", {
          search: this.search,
        })
        .then((response) => {
          console.log(response);
          this.users = response.data;
        });
    },
  },
};
</script>
