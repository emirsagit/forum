window._ = require('lodash');
window.Vue = require('vue');
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try { require('bootstrap');
} catch (e) {}

window.events = new Vue();

window.flash = function (message, type = "success") {
    window.events.$emit('flash', {message, type})
}

window.show = function ($field) {
    window.events.$emit('show', $field)
}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
