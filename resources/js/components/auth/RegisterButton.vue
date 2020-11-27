<template>
  <a
    class="text-sm mt-4 lg:mt-0 mr-4 hover:text-teal-800"
    href="#"
    @click.prevent="showing()"
    >Kayıt Ol</a
  >
</template>

<script>
export default {
  data() {
    return {
      register: "register",
    };
  },
  methods: {
    showing() {
        show(this.register)
    }
  },
};
</script>
