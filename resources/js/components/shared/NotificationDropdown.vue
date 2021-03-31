<template>
  <div class="relative inline-block text-left z-50" v-if="notifications.length">
    <div
      @click="expand = !expand"
      class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-red-600 hover:text-red-800 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-5 w-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </div>
    <div
      class="lg:origin-top-right absolute lg:right-0 lg:mt-2 rounded-md shadow-lg z-30 lg:w-64"
      v-show="expand"
    >
      <div class="rounded-md bg-white shadow-xs">
        <div
          class="py-1 cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            v-for="notification in notifications"
            :key="notification.id"
            :href="notification.data.link"
            @click="markAsRead(notification.id)"
            v-text="notification.data.message"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
            role="menuitem"
            > {{ notification.data.link }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: false,
      expand: false,
    };
  },
  mounted() {
    axios
      .get("/profiles/" + window.App.user.name + "/notifications")
      .then(({ data }) => (this.notifications = data));
  },
  methods: {
    markAsRead(id) {
      axios
      .delete(
        "/profiles/" + window.App.user.username + "/notifications/" + id
      )
      .then(response => { 
        this.expand = false
      })
      .catch(error => {
        console.log(error.response)
      });
    },
  },
};
</script>