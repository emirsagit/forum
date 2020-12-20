<template>
  <div class="flex flex-col">
    <p class="ml-2 text-lg font-semibold">
      {{ item.owner.name }} tarafından yazıldı.
    </p>
    <p class="ml-2 text-md">{{ item.updated_at }} güncellendi</p>
    <hr class="bg-teal-700 h-2 shadow-lg rounded-lg mt-2 ml-2 hidden lg:flex" />
  </div>
</template>

<script>
export default {
    props: ["item"],
};
</script>
