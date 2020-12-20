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
      {{ level.created_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Seviye Adı</span
      >
      {{ level.name }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Bilmece Sayısı</span
      >
      {{ level.puzzles_count }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >İşlemler</span
      >
      <a
        class="text-blue-400 hover:text-blue-600 underline cursor-pointer"
        @click="$emit('update-request', level)"
        >Düzenle</a
      >
      <a
        class="text-red-400 hover:text-red-600 underline pl-6 cursor-pointer"
        @click="destroy"
        >Sil</a
      >
    </td>
  </tr>
</template>

<script>
export default {
  props: ["dataLevel"],
  data() {
    return {
      level: this.dataLevel,
    };
  },

  methods: {
    destroy() {
      if (confirm("Emin misiniz?"))
        axios.delete("/admin/levels/" + this.level.slug).then((response) => {
          this.$emit("deleted");
          window.flash("İşlem Başarılı");
        });
    },
  },
};
</script>