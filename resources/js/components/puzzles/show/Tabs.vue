<template>
  <div class="w-full">
    <p v-for="(puzzle, index) in dataPuzzles" :key="puzzle.id">
      <tab :data-puzzle="puzzle" :index="index"> </tab>
    </p>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  props: ["dataPuzzles"],
  components: {
    Tab,
  },
  data() {
    return {};
  },
};
</script>