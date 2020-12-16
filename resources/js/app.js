require("./bootstrap");

/* auth */
import Signin from "./components/auth/Signin.vue";
import Register from "./components/auth/Register.vue";
import SigninButton from "./components/auth/SigninButton.vue";
import RegisterButton from "./components/auth/RegisterButton.vue";
import NavigationAuthDropdown from "./components/auth/NavigationAuthDropdown.vue";
import NavigationAuth from "./components/auth/NavigationAuth.vue";
/* endauth */

/* admin */
import Admin from "./components/admin/Admin.vue";
/* endadmin */

import Threads from "./components/threads/index/Threads.vue"; //threads.index

import Blogs from "./components/blogs/index/Blogs.vue"; //blogs.index
import Blog from "./components/blogs/show/Blog.vue"; //blogs.index

import ThreadForm from "./components/threads/create/ThreadForm.vue"; //threads.create

import ThreadEditForm from "./components/threads/edit/ThreadEditForm.vue"; //threads.update

import Thread from "./components/threads/show/Thread.vue"; //threads.show

import Profile from "./components/profiles/show/Profile.vue"; //profile.show

/* shared */
import Flash from "./components/shared/Flash.vue";
import NavLink from "./components/shared/NavLink.vue";
import FooterField from "./components/shared/FooterField.vue";
import Paginator from "./components/shared/Paginator.vue";
import NotificationDropdown from "./components/shared/NotificationDropdown.vue";
import Recaptcha from "./components/shared/Recaptcha.vue";
/* endshared */
import Editor from "vue-editor-js";
import Axios from "axios";
window.Editor = Vue.use(Editor);

const app = new Vue({
    el: "#app",
    components: {
        Signin,
        Threads,
        Register,
        SigninButton,
        RegisterButton,
        ThreadForm,
        NavigationAuthDropdown,
        NavigationAuth,
        Flash,
        Thread,
        Paginator,
        NotificationDropdown,
        Profile,
        Recaptcha,
        ThreadEditForm,
        Admin,
        FooterField,
        NavLink,
        Blogs,
        Blog
    },

    data: {
        control: {
            login: false,
            register: false
        },
        expand: false,
        search: ""
    },

    //for showing and hide login and register page from anywhere in app
    methods: {
        toggle(data) {
            this.control[data.field] = data.value;
        },

        searchRequest() {
            window.location.href = "/search?search=" + this.search;
        },
    },

    created() {
        window.events.$on("toggle", data => {
            this.toggle(data);
        });
    }
});
