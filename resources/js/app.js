
require("./bootstrap");

/* auth */
import Signin from "./components/auth/Signin.vue";
import Register from "./components/auth/Register.vue";
import SigninButton from "./components/auth/SigninButton.vue";
import RegisterButton from "./components/auth/RegisterButton.vue";
import NavigationDropdown from "./components/auth/NavigationDropdown.vue";
/* endauth */

import Threads from "./components/threads/index/Threads.vue"; //threads.index

import ThreadForm from "./components/threads/create/ThreadForm.vue"; //thread.create

import Thread from "./components/threads/show/Thread.vue"; //thread.show

import Profile from "./components/profiles/show/Profile.vue"; //profile.show

/* shared */
import Flash from "./components/shared/Flash.vue";
import Paginator from "./components/shared/Paginator.vue";
import NotificationDropdown from "./components/shared/NotificationDropdown.vue";
/* endshared */

const app = new Vue({
    el: "#app",
    components: {
        Signin, Threads, Register, SigninButton, RegisterButton, ThreadForm, NavigationDropdown, Flash, Thread, Paginator, NotificationDropdown, Profile
    },

    data: {
        control: {
            login: false,
            register: false
        }
    },

//for showing and hide login and register page from anywhere in app
    methods: {
        show(field) {
            this.control[field] = true;
        },
        hide(field) {
            this.control[field] = false;
        }
    },

    created() {
        window.events.$on('show', field => {
            this.show(field);
        });
    }
});
