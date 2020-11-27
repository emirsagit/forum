<template>
  <div
    class="flex flex-col text-left text-sm"
  >
    <div class="flex flex-col lg:items-center cursor-pointer">
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
      <form
        id="logout-form"
        action="/logout"
        method="POST"
        class="d-none"
      ></form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  methods: {
    goProfile() {
      window.location.href = "/profiles/" + this.user.name;
      this.expand = false;
    },

    logout() {
      axios
        .post("/logout")
        .then(function (response) {
          console.log(response);
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