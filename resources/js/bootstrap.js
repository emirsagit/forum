
window.Vue = require("vue");

let authorizations = require("./authorizations.js");

Vue.prototype.$authorize = function(...params) {
    if (!window.App.signedIn) {
        return false;
    }

    if (window.App.isAdmin) {
        return true;
    }

    if (typeof params[0] === "string") {
        return authorizations[params[0]](params[1]);
    }

    return params[0](window.App.user);
};

Vue.prototype.$signedIn = window.App.signedIn;

window.events = new Vue();

window.flash = function(message, type = "success") {
    window.events.$emit("flash", { message, type });
};

window.toggle = function(field = "login", value = true) {
    window.events.$emit("toggle", { field, value });
};

window.markAsBest = function($field) {
    window.events.$emit("markAsBest", $field);
};

window.deleteMarkAsBest = function($field) {
    window.events.$emit("deleteMarkAsBest", $field);
};

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

