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
      {{ thread.created_at }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Başlık</span
      >
      {{ thread.title }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Kategori</span
      >
      {{ thread.channel.name }}
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Yapılan Yorum
      </span>
      <a
        :href="'/threads/' + thread.channel.slug + '/' + thread.slug"
        class="text-yellow-700 hover:text-yellow-600 cursor-pointer flex flex-row w-full m-auto items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 mr-2 mt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {{ thread.replies_count }}
      </a>
    </td>
    <td
      class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
    >
      <span
        class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"
        >Y.Kapalı</span
      >
      <input
        type="checkbox"
        class="checked:bg-blue-600 checked:border-transparent"
        v-model="locked"
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
        @click="$emit('update-request', thread)"
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
  props: ["dataThread"],
  data() {
    return {
      thread: this.dataThread,
      locked: this.dataThread.locked,
    };
  },

  methods: {
    destroy() {
      if (
        confirm(
          "Başlıkla birlikte yanıtları da kalıcı olarak kaybedeceksiniz. Emin misiniz?"
        )
      )
        axios.delete("/admin/threads/" + this.thread.slug).then((response) => {
          this.$emit("deleted");
          window.flash("İşlem Başarılı");
        });
    },
    toggle() {
      if (this.locked) {
        axios.delete("/thread-lock/" + this.thread.slug).then((response) => {
          flash("Yoruma Açıldı");
          this.locked = false;
        });
      } else {
        axios.post("/thread-lock/" + this.thread.slug).then((response) => {
          flash("Yoruma Kapatıldı");
          this.locked = true;
        });
      }
    },
  },
};
</script>