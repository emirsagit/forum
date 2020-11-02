<template>
  <div
    class="fixed right-0 bottom-0 p-4 text-white rounded lg:text-xl lg:w-64 mb-2 mr-2 flex flex-col items-center"
    :class="classes"
    v-show="this.showing"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ['flashing'],
  data() {
    return {
      message: "",
      showing: false,
      type:"success"
    };
  },
  created() {
     if(this.flashing) {
        this.message = this.flashing;
        this.showing = true;
        this.hide();
     } 
    window.events.$on('flash', data => {
        this.display (data)
    });
  },
  methods: {
    display(data) {
        this.message = data.message;
        this.type = data.type;
        this.showing = true;
        this.hide();
    },
    hide() {
      setTimeout(() => {
        this.showing = false;
      }, 3000);
    },
  },
  computed: {
    classes() {
      return this.type == "success" ? "bg-green-400" : "bg-red-400"; 
    }
  },
};
</script>
