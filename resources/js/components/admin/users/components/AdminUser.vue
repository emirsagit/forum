<template>
  <tr
    class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
  >
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Tarih</span
      >
      {{ user.created_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Kullanıcı Adı</span
      >
      {{ user.username }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Ad</span
      >
      {{ user.name }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >E-posta</span
      >
      {{ user.email }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Engelle</span
      >
      <input
        type="checkbox"
        class="checked:bg-blue-600 checked:border-transparent"
        v-model="deleted"
        @click="toggle"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["dataUser"],
  data() {
    return {
      user: this.dataUser,
      deleted: this.dataUser.deleted_at,
    };
  },

  methods: {
    toggle() {
      if (this.deleted) {
        axios
          .patch("/admin/users/" + this.dataUser.username, {
            'user' : this.dataUser.username
          })
          .then((response) => {
            flash("Kullanıcı Aktif");
            this.deleted = false;
          }).catch((error) => {
            console.log(error);
          });
      } else {
        if (confirm("Kullanıcıyı engellemek isyiyor musunuz?"))
          axios
            .delete("/admin/users/" + this.dataUser.username)
            .then((response) => {
              flash("Kullanıcı Engellendi");
              this.deleted = true;
            });
      }
    },
  },
};
</script>