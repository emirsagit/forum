<template>
  <div class="flex m-1 flex-col">
    <level-form
      @created="created"
      @updated="updated"
      @reset="reset"
      :data-level="level"
      :data-levels="levels"
      v-if="displayForm"
    ></level-form>
    <div
      class="flex m-1 sm:flex-row flex-col-reverse justify-end items-center"
      v-if="!displayForm"
    >
      <a
        class="bg-teal-800 mb-2 rounded-lg text-white px-2 py-1 text-lg hover:bg-teal-700 cursor-pointer hidden md:flex"
        @click="displayForm = true"
      >
        Yeni Seviye
      </a>
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
            Seviye Adı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Bilmece Sayısı
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            İşlemler
          </th>
        </tr>
      </thead>
      <tbody v-for="(level, index) in levels" :key="level.id">
        <admin-level
          :data-level="level"
          @update-request="updateRequest"
          @deleted="deleted(index)"
        ></admin-level>
      </tbody>
    </table>
    <div class="fixed bottom-0 right-0 mr-4 mb-4 md:hidden">
      <a
        class="bg-indigo-700 hover:bg-indigo-600 text-white flex flex-col m-auto rounded-full p-2 cursor-pointer"
        @click.prevent="displayForm = true"
        v-if="!displayForm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import AdminLevel from "./components/AdminLevel.vue";
import LevelForm from "./components/LevelForm.vue";

export default {
  components: { AdminLevel, LevelForm },
  props: ["dataLevels"],
  data() {
    return {
      levels: this.dataLevels,
      displayForm: false,
      level: "",
    };
  },

  methods: {
    created(level) {
        console.log(level);
      this.levels.unshift(level);
      this.reset();
    },
    deleted(index) {
      this.levels.splice(index, 1);
    },
    updated(level) {
      const index = this.levels.findIndex((el) => el.id === level.id);
      Vue.set(this.levels, index, level);
      this.displayForm = false;
    },
    reset() {
      this.displayForm = false;
      this.level = "";
    },
    updateRequest(level) {
      this.displayForm = true;
      this.level = level;
    },
  },
};
</script>
