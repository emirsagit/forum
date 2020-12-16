<template>
  <div class="flex m-1 flex-col">
    <blog-form
      v-if="displayForm"
      :data-blog="blog"
      @updated="updated"
      @created="created"
      @reset="reset"
    ></blog-form>
    <div
      class="flex m-1 sm:flex-row flex-col-reverse justify-between items-center"
      v-if="!displayForm"
    >
      <select
        class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 text-sm rounded-xl leading-none lg:leading-tight focus:outline-none focus:border-gray-500 text-center cursor-pointer mr-4 max-content px-2 py-2 mb-1"
        id="grid-state"
        @change="fetch()"
        v-model="selectedChannel"
      >
        <option value="all">Tamamı</option>
        <option
          v-for="channel in dataChannels"
          :key="channel.id"
          v-text="channel.name"
          :value="channel"
        ></option>
      </select>
      <div class="flex flex-row my-2">
        <input
          type="search"
          class="bg-purple-white shadow rounded border-0 p-1 pl-2"
          placeholder="Ara..."
          v-model="search"
        />
        <svg
          version="1.1"
          class="h-4 text-dark mt-2 -ml-4 cursor-pointer hover:text-teal-600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
          style="enable-background: new 0 0 52.966 52.966"
          xml:space="preserve"
          @click="searchRequest"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
          c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
          C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
          S32.459,40,21.983,40z"
          />
        </svg>
      </div>
      <a
        class="bg-teal-800 mb-2 rounded-lg text-white px-2 py-1 text-lg hover:bg-teal-700 cursor-pointer hidden md:flex"
        @click="displayForm = true"
      >
        Yeni Blog
      </a>
    </div>
    <table class="border-collapse w-full" v-if="!displayForm">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Tarih
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Başlık
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Kategori
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            Sliderda Göster
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            İşlemler
          </th>
        </tr>
      </thead>
      <tbody v-for="(blog, index) in blogs" :key="blog.id">
        <admin-blog
          :data-blog="blog"
          @deleted="deleted(index)"
          @update-request="updateRequest"
        ></admin-blog>
      </tbody>
    </table>
    <div class="fixed bottom-0 right-0 mr-4 mb-4 md:hidden">
      <a
        class="bg-indigo-700 hover:bg-indigo-600 text-white flex flex-col m-auto rounded-full p-2 cursor-pointer"
         @click.prevent="displayForm = true"
         v-if="! displayForm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-10 w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import AdminBlog from "./components/AdminBlog.vue";
import BlogForm from "./components/BlogForm.vue";

export default {
  components: { AdminBlog, BlogForm },
  props: ["dataBlogs", "dataChannels"],
  data() {
    return {
      blogs: this.dataBlogs,
      displayForm: false,
      blog: "",
      selectedChannel: "all",
      search: "",
    };
  },
  methods: {
    deleted(index) {
      this.blogs.splice(index, 1);
    },
    updateRequest(blog) {
      this.blog = blog;
      this.displayForm = true;
    },
    updated: async function (blog) {
      const index = this.blogs.findIndex((el) => el.id === blog.id);
      Vue.set(this.blogs, index, blog);
      this.displayForm = false;
    },
    created(blog) {
      this.blogs.unshift(blog);
      this.reset();
      this.displayForm = false;
    },
    reset() {
      this.displayForm = false;
      this.blog = "";
    },
    fetch() {
      if (this.selectedChannel === "all") {
        this.blogs = this.dataBlogs;
      } else {
        axios.get("/blogs/" + this.selectedChannel.slug).then((response) => {
          console.log(response);
          this.blogs = response.data;
        });
      }
    },
    searchRequest() {
      axios
        .post("/admin/blogs/search", {
          search: this.search,
        })
        .then((response) => {
          this.blogs = response.data;
        });
    },
  },
};
</script>
