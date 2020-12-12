<template>
  <div class="mb-4">
    <p class="mb-1 p-2 text-xl text-teal-600 text-center">Trend Başlıklar</p>
    <ul class="w-full">
      <li 
      class="mb-1 px-2 py-1 text-gray-600 hover:text-teal-600 cursor-pointer"
      v-for="trending in trendings"
      :key="trending.id"
      >
      <a :href='"/threads/" + trending.channel.slug + "/" + trending.slug'  v-text="trending.title"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['trendings'],
};
</script>
