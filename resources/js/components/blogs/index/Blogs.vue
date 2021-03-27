<template>
  <div>
    <div class="bg-gray-200" id="last-published">
      <div class="lg:px-24 p-4 lg:p-8">
        <div class="flex md:flex-row flex-col flex-wrap">
          <div
            class="md:w-1/2 w-full flex flex-col pb-8 md:pr-8"
            v-if="blogs.length"
          >
            <img
              :src="'/storage/' + blogs[0].image"
              class="rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl"
              loading="lazy"
              :alt="blogs[0].title"
              @click="goto(blogs[0])"
            />
            <p
              class="-mt-6 text-white text-sm px-1 table rounded-md font-semibold"
              :class="'bg-' + blogs[0].channel.color + '-600'"
            >
              #{{ blogs[0].channel.name }}
            </p>
            <h4
              class="font-bold md:text-3xl text-2xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer pt-2 leading-tight"
              v-text="blogs[0].title"
              @click="goto(blogs[0])"
            ></h4>
          </div>
          <div class="md:w-1/2 w-full md:pl-8">
            <div
              class="flex flex-row flex-wrap"
              v-for="(blog, index) in blogs"
              :key="blog.id"
              :class="index !== 0 ? 'pb-8' : ''"
            >
              <div
                class="w-1/2 md:w-1/3 md:pt-0 flex flex-col"
                v-if="index !== 0"
              >
                <img
                  :src="'/storage/' + blog.image"
                  :alt="blogs.title"
                  loading="lazy"
                  class="rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl"
                  @click="goto(blog)"
                />
                <p
                  class="-mt-6 text-xs px-1 rounded-md table text-white font-semibold"
                  :class="'bg-' + blog.channel.color + '-600'"
                >
                  #{{ blog.channel.name }}
                </p>
              </div>
              <div class="w-1/2 md:w-2/3 px-2 md:pl-4" v-if="index !== 0">
                <h4
                  class="font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight"
                  v-text="blog.title"
                  @click="goto(blog)"
                ></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300" id="trendings">
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-3/4 w-full p-4 lg:p-8 lg:pl-24">
          <p class="text-3xl font-extrabold pb-8 text-teal-800">Popüler:</p>
          <div class="flex flex-row flex-wrap">
            <div
              class="lg:w-1/2 w-full flex flex-row pb-8"
              v-for="trending in trendings"
              :key="trending.id"
            >
              <div class="w-1/2 lg:w-1/3 md:pt-0 flex flex-col">
                <img
                  :src="'/storage/' + trending.image"
                  :alt="trending.title"
                  loading="lazy"
                  class="rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl"
                  @click="goto(trending)"
                />
                <p
                  class="-mt-6 text-xs px-1 rounded-md table text-white font-semibold"
                  :class="'bg-' + trending.channel.color + '-600'"
                >
                  #{{ trending.channel.name }}
                </p>
              </div>
              <div class="w-1/2 lg:w-2/3 px-2 md:pr-4">
                <h4
                  class="font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight"
                  @click="goto(trending)"
                >
                  {{ trending.title }}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 w-full bg-gray-100 p-4 lg:p-8 lg:pr-24 rounded-lg">
          <p class="text-3xl font-extrabold pb-4 text-teal-800">
            Sizden Gelenler
          </p>
          <div class="flex flex-col">
            <a
              :href="'/' + thread.slug"
              v-for="thread in threads"
              :key="thread.id"
              v-text="thread.title"
              class="py-2 text-lg text-teal-700 hover:text-teal-800"
            >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Slider from "../../shared/VueSlickSlider.vue";
export default {
  props: ["dataBlogs", "dataTrendings", "dataThreads"],
  data() {
    return {
      blogs: this.dataBlogs,
      trendings: this.dataTrendings,
      threads: this.dataThreads,
    };
  },

  methods: {
    goto(blog) {
      window.location.href = "/blog/" + blog.slug;
    },
  },
};
</script>
