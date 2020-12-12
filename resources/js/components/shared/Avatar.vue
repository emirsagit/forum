<template>
  <div class="flex overflow-hidden flex-col">
    <img
      v-if="!avatar"
      class="inline-block h-10 w-10 rounded-full text-white shadow-solid"
      :src="item.owner.avatar_path"
      :alt="item.owner.name"
    />
    <!-- random color mixin color -->
    <div
      v-if="avatar"
      class="w-10 h-10 rounded-full flex flex-col items-center justify-center"
      :class="'bg-' + randomColor + '-600'"
    >
      <p class="text-white font-semibold text-xl">
        {{ item.owner.avatar_path }}
      </p>
    </div>
  </div>
</template>

<script>
import colors from "../../mixins/colors.js";
export default {
  props: ["item"],
  mixins: [colors],
  computed: {
    avatar() {
      return this.item.owner.avatar_path.length == 1;
    },
  },
};
</script>
