require("./bootstrap");

const Admin = () =>
  import("./components/admin/Admin.vue" /* webpackChunkName: "Admin" */);

const NavigationAuthDropdown = () =>
  import(
    "./components/auth/NavigationAuthDropdown.vue" /* webpackChunkName: "NavigationAuthDropdown" */
  );

const Threads = () =>
  import(
    "./components/threads/index/Threads.vue" /* webpackChunkName: "Threads" */
  );

const Thread = () =>
  import(
    "./components/threads/show/Thread.vue" /* webpackChunkName: "Thread" */
  );

const Profile = () =>
  import(
    "./components/profiles/show/Profile.vue" /* webpackChunkName: "Profile" */
  );

const Puzzle = () =>
  import(
    "./components/puzzles/show/Puzzle.vue" /* webpackChunkName: "Puzzle" */
  );

const Paginator = () =>
  import(
    "./components/shared/Paginator.vue" /* webpackChunkName: "Paginator" */
  );
const NotificationDropdown = () =>
  import(
    "./components/shared/NotificationDropdown.vue" /* webpackChunkName: "NotificationDropdown" */
  );
const Recaptcha = () =>
  import(
    "./components/shared/Recaptcha.vue" /* webpackChunkName: "Recaptcha" */
  );
const NavChannels = () =>
  import(
    "./components/shared/NavChannels.vue" /* webpackChunkName: "NavChannels" */
  );

const Blog = () =>
  import("./components/blogs/show/Blog.vue" /* webpackChunkName: "Blog" */);

const Blogs = () =>
  import("./components/blogs/index/Blogs.vue" /* webpackChunkName: "Blogs" */);

const NavLink = () =>
  import("./components/shared/NavLink.vue" /* webpackChunkName: "NavLink" */);

const Search = () =>
  import("./components/shared/Search.vue" /* webpackChunkName: "Search" */);

const FooterField = () =>
  import(
    "./components/shared/FooterField.vue" /* webpackChunkName: "FooterField" */
  );

const Flash = () =>
  import("./components/shared/Flash.vue" /* webpackChunkName: "Flash" */);

const Signin = () =>
  import("./components/auth/Signin.vue" /* webpackChunkName: "Signin" */);

const Register = () =>
  import("./components/auth/Register.vue" /* webpackChunkName: "Register" */);

const SigninButton = () =>
  import(
    "./components/auth/SigninButton.vue" /* webpackChunkName: "SigninButton" */
  );

const RegisterButton = () =>
  import(
    "./components/auth/RegisterButton.vue" /* webpackChunkName: "RegisterButton" */
  );

const ThreadForm = () =>
  import(
    "./components/threads/create/ThreadForm.vue" /* webpackChunkName: "ThreadForm" */
  );
const ThreadEditForm = () =>
  import(
    "./components/threads/edit/ThreadEditForm.vue" /* webpackChunkName: "ThreadEditForm" */
  );

const app = new Vue({
  el: "#app",
  components: {
    Admin,
    Signin,
    Threads,
    Register,
    SigninButton,
    RegisterButton,
    ThreadForm,
    NavigationAuthDropdown,
    Flash,
    Thread,
    Paginator,
    NotificationDropdown,
    Profile,
    Recaptcha,
    ThreadEditForm,
    FooterField,
    NavLink,
    Blogs,
    Blog,
    NavChannels,
    Puzzle,
    Search,
  },

  data: {
    control: {
      login: false,
      register: false,
    },
    expand: false,
    windowWidth: "",
  },

  //for showing and hide login and register page from anywhere in app
  methods: {
    toggle(data) {
      this.control[data.field] = data.value;
    },
  },

  created() {
    window.events.$on("toggle", (data) => {
      this.toggle(data);
    });

    this.windowWidth = window.innerWidth;
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
});

// import NavLink from "./components/shared/NavLink.vue";
// import Search from "./components/shared/Search.vue";
// import Signin from "./components/auth/Signin.vue";
// import Register from "./components/auth/Register.vue";
// import SigninButton from "./components/auth/SigninButton.vue";
// import RegisterButton from "./components/auth/RegisterButton.vue";
// import FooterField from "./components/shared/FooterField.vue";
// import Flash from "./components/shared/Flash.vue";
// import Blogs from "./components/blogs/index/Blogs.vue"; //blogs.index

// /* auth */
// import Signin from "./components/auth/Signin.vue";
// import Register from "./components/auth/Register.vue";
// import SigninButton from "./components/auth/SigninButton.vue";
// import RegisterButton from "./components/auth/RegisterButton.vue";
// import NavigationAuthDropdown from "./components/auth/NavigationAuthDropdown.vue";
// import NavigationAuth from "./components/auth/NavigationAuth.vue";
// /* endauth */

// /* admin */
// import Admin from "./components/admin/Admin.vue";
// /* endadmin */

// import Threads from "./components/threads/index/Threads.vue"; //threads.index

// import Blog from "./components/blogs/show/Blog.vue"; //blogs.index

// import ThreadForm from "./components/threads/create/ThreadForm.vue"; //threads.create

// import ThreadEditForm from "./components/threads/edit/ThreadEditForm.vue"; //threads.update

// import Thread from "./components/threads/show/Thread.vue"; //threads.show

// import Profile from "./components/profiles/show/Profile.vue"; //profile.show

// import Puzzle from "./components/puzzles/show/Puzzle.vue"; //puzzles.show

// /* shared */
// import Flash from "./components/shared/Flash.vue";
// import NavLink from "./components/shared/NavLink.vue";
// import FooterField from "./components/shared/FooterField.vue";
// import Paginator from "./components/shared/Paginator.vue";
// import NotificationDropdown from "./components/shared/NotificationDropdown.vue";
// import Recaptcha from "./components/shared/Recaptcha.vue";
// import NavChannels from "./components/shared/NavChannels.vue";
// /* endshared */
// import Editor from "vue-editor-js";
// window.Editor = Vue.use(Editor);
