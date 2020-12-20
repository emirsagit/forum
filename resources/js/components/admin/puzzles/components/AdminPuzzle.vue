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
      {{ puzzle.created_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Bilmece</span
      >
      {{ puzzle.question }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Seviyeler</span
      >
      <div v-if="puzzle.levels.length" class="flex flex-row justify-center">
        <p
          v-for="level in puzzle.levels"
          :key="level.id"
          v-text="level.name"
          class="pr-2 text-center"
        ></p>
      </div>
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
        @click="$emit('update-request', puzzle)"
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
  props: ["dataPuzzle"],
  data() {
    return {
      puzzle: this.dataPuzzle,
    };
  },

  methods: {
    destroy() {
      if (confirm("Emin misiniz?"))
        axios.delete("/admin/puzzles/" + this.puzzle.id).then((response) => {
          this.$emit("deleted");
          window.flash("İşlem Başarılı");
        });
    },
  },
};
</script>