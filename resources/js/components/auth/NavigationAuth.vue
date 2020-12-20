<template>
  <div
    class="flex flex-col items-center"
  >
    <div class="flex flex-col lg:items-center cursor-pointer text-2lg">
      <a
        class="hover:text-teal-800 mt-4"
        @click.prevent="goProfile()"
        role="menuitem"
        >Profil</a
      >
      <a
        class="hover:text-teal-800 mt-4"
        @click.prevent="logout()"
        role="menuitem"
        >Çıkış</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  methods: {
    goProfile() {
      window.location.href = "/profiles/" + this.user.username;
      this.expand = false;
    },

    logout() {
      axios
        .post("/logout")
        .then(function (response) {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    handleFocusOut () {
      console.log('focusout')
      this.$parent.expand = false
    }
  },
};
</script>