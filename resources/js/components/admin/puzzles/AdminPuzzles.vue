<template>
  <div class="flex m-1 flex-col">
    <puzzle-form
      @created="created"
      @updated="updated"
      @reset="reset"
      :data-puzzle="puzzle"
      :data-levels="levels"
      v-if="displayForm"
    ></puzzle-form>
    <div
      class="flex m-1 sm:flex-row flex-col-reverse justify-between items-center"
      v-if="!displayForm"
    >
      <select
        class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 text-sm rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer mr-4 max-content px-2 py-2 mb-1"
        @change="fetch()"
        v-model="selectedLevel"
      >
        <option value="all">Tamamı</option>
        <option
          v-for="level in levels"
          :key="level.id"
          v-text="level.name"
          :value="level"
        ></option>
      </select>
      <a
        class="bg-teal-800 mb-2 rounded-lg text-white px-2 py-1 text-lg hover:bg-teal-700 cursor-pointer hidden md:flex"
        @click="displayForm = true"
      >
        Yeni Bilmece
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
            Bilmece
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Seviyeler
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            İşlemler
          </th>
        </tr>
      </thead>
      <tbody v-for="(puzzle, index) in puzzles" :key="puzzle.id">
        <admin-puzzle
          :data-puzzle="puzzle"
          @update-request="updateRequest"
          @deleted="deleted(index)"
        ></admin-puzzle>
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
import AdminPuzzle from "../../admin/puzzles/components/AdminPuzzle.vue";
import PuzzleForm from "../../admin/puzzles/components/PuzzleForm.vue";

export default {
  components: { AdminPuzzle, PuzzleForm },
  props: ["dataPuzzles", "dataLevels"],
  data() {
    return {
      puzzles: this.dataPuzzles,
      displayForm: false,
      levels: this.dataLevels,
      puzzle: "",
      selectedLevel: "all",
    };
  },

  methods: {
    created(puzzle) {
      this.puzzles.unshift(puzzle);
      this.reset();
    },
    deleted(index) {
      this.puzzles.splice(index, 1);
    },
    updated(puzzle) {
      const index = this.puzzles.findIndex((el) => el.id === puzzle.id);
      Vue.set(this.puzzles, index, puzzle);
      this.displayForm = false;
    },
    reset() {
      this.displayForm = false;
      this.puzzle = "";
    },
    updateRequest(puzzle) {
      this.displayForm = true;
      this.puzzle = puzzle;
    },
    fetch() {
      if (this.selectedLevel === "all") {
        this.puzzles = this.dataPuzzles;
      } else {
        axios.get("/admin/puzzles/" + this.selectedLevel.slug).then((response) => {
          this.puzzles = response.data;
        });
      }
    },
  },
};
</script>
