<template>
  <a
    class="mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg"
    href="#"
    @click.prevent="showing()"
    >Kayıt Ol</a
  >
</template>

<script>
export default {
  methods: {
    showing() {
        window.toggle('register', true)
    }
  },
};
</script>
