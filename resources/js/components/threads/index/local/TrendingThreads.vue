<template>
  <div class="shadow mb-4">
    <p class="mb-1 p-2 text-xl text-teal-600">Trend Başlıklar</p>
    <ul class="w-full">
      <li 
      class="mb-2 p-2 text-gray-600 hover:text-teal-600"
      v-for="trending in trendings"
      :key="trending.path"
      >
      <a :href="trending.path" v-text="trending.title"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['trendings'],
};
</script>
