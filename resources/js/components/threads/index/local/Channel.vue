<template>
  <div class="shadow-md">
    <p class="mb-1 p-2 text-xl text-teal-600">Konular</p>
    <ul class="w-full">
      <li
        v-for="channel in channels"
        :key="channel.id"
        class="mb-2 p-2 text-gray-600 hover:text-teal-600"
      >
        <a :href="`/threads/${channel.slug}`">{{ channel.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["channels"],
};
</script>
