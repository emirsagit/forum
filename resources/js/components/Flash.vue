<template>
  <div
    class="fixed right-0 bottom-0 bg-green-400 p-4 text-white rounded lg:text-xl lg:w-64 mb-2 mr-2 flex flex-col items-center"
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
    };
  },
  created() {
     if(this.flashing) {
         this.display(this.flashing);
     } 
    window.events.$on('flash', message => {
        this.display (message)
    });
  },
  methods: {
    display(eventMessage) {
        this.message = eventMessage;
        this.showing = true;
        this.hide();
    },
    hide() {
      setTimeout(() => {
        this.showing = false;
      }, 3000);
    },
  },
};
</script>
