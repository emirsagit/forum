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
      {{ channel.created_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Adı</span
      >{{ channel.name }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center lg:table-cell relative lg:static m-auto flex flex-col items-center"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Renk</span
      >
      {{ channel.color }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Açılan Başlık Sayısı</span
      >
      {{ channel.threads_count }}
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
        @click="update"
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
  props: ["dataChannel"],
  data() {
    return {
      channel: this.dataChannel,
    };
  },
  methods: {
    update() {
      this.$emit('update', this.channel)
    },
    destroy() {
      if (
        confirm(
          "Kategori ile birlikte ilgili başlıkarı, yazıları ve yanıtları da kalıcı olarak kaybedeceksiniz. Emin misiniz?"
        )
      )
        axios
          .delete("/admin/channels/" + this.channel.slug)
          .then((response) => {
            this.$emit("deleted");
            window.flash("İşlem Başarılı");
          });
    },
  },
};
</script>