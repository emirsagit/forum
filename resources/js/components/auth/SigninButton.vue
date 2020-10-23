<template>
    <a
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      href="#"
      @click.prevent="$emit('show', login)"
      >Giriş</a
    >
</template>

<script>
export default {
  data() {
    return {
      login: "login"
    }
  },
};
</script>
