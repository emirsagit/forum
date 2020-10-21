/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import signin from  './components/Signin.vue';
import register from  './components/Register.vue';
import SigninButton from  './components/SigninButton.vue';
import RegisterButton from  './components/RegisterButton.vue';
import ReplyForm from  './components/ReplyForm.vue';
import threads from  './components/Threads.vue';
import ThreadForm from  './components/ThreadForm.vue';

// Vue.component('signin', require('./components/Signin.vue'));
// Vue.component('threads', require('./components/Threads.vue').default);

const app = new Vue({
    el: '#app',
    components: {
        signin,
        threads,
        register,
        SigninButton,
        RegisterButton,
        ReplyForm,
        ThreadForm
    },
    data: {
        control: {
            login: false,
            register:false
        }    
    },
    methods: {
        show(field) {
            this.control[field] = true;
        },
        hide(field) {
            this.control[field] = false;
        }
    },
});
