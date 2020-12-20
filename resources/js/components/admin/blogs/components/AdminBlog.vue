<template>
  <tr
    class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 min-h-screen"
  >
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Tarih</span
      >
      {{ blog.updated_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Başlık</span
      >
      {{ blog.title }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Kategori</span
      >
      {{ blog.channel.name }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Slider</span
      >
      <input
        type="checkbox"
        class="checked:bg-blue-600 checked:border-transparent"
        v-model="slider"
        @click="toggle"
      />
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
        @click="$emit('update-request', blog)"
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
  props: ["dataBlog"],
  data() {
    return {
      blog: this.dataBlog,
      slider: this.dataBlog.slider,
    };
  },

  methods: {
    destroy() {
      if (
        confirm(
          "Başlıkla birlikte yanıtları da kalıcı olarak kaybedeceksiniz. Emin misiniz?"
        )
      )
        axios.delete("/admin/blogs/" + this.blog.slug).then((response) => {
          this.$emit("deleted");
          window.flash("İşlem Başarılı");
        });
    },

    toggle() {
      axios.post('/admin/blogs/' + this.dataBlog.slug + '/slider')
      .then((response) => {
        flash('Başarılı')
      });
    }
  },
};
</script>