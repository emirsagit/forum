<template>
  <div class="lg:px-24 lg:p-4 px-4 flex flex-col lg:flex-row">
    <div class="lg:w-3/5 w-full">
      <div class="pb-4 leading-loose text-justify flex flex-col pt-4">
        <div
          class="pb-4 text-xl leading-loose text-justify p-link"
          v-html="dataLevel.body"
        ></div>
        <div v-if="dataLevel.image">
          <img
            :src="'/storage/' + dataLevel.image"
            :alt="dataLevel.name"
            class="object-cover w-full mb-8 shadow-xl"
            loading="lazy"
          />
        </div>
        <tabs :data-puzzles="dataPuzzles"></tabs>
      </div>
    </div>
    <div class="lg:w-2/5 w-full flex flex-col lg:pl-12 lg:mt-0 lg:pt-8">
      <div
        class="flex flex-row pb-8 items-center justify-center lg:justify-start"
        v-if="dataLevel.owner"
      >
        <avatar :item="dataLevel"></avatar>
        <writer :item="dataLevel"></writer>
      </div>
      <div class="flex flex-col sticky top-0 items-center lg:items-start">
        <p class="text-teal-800 mb-8 text-3xl font-semibold">Kategoriler</p>
        <div
          class="flex-row flex items-center mb-4"
          v-for="level in dataLevels"
          :key="level.id"
        >
          <a
            :href="'/puzzles/' + level.slug"
            class="text-teal-800 lg:text-2xl text-xl hover:text-teal-900 pb-4"
          >
            {{ level.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import Avatar from "../../shared/Avatar";
import Writer from "../../shared/Writer";
export default {
  components: {
    Tabs,
    Writer,
    Avatar,
  },
  props: ["dataPuzzles", "dataLevel", "dataLevels"],
};
</script>
