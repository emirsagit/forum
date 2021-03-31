<template>
  <div class="bg-gradient-to-b from-gray-100 to-gray-200">
    <div id="last-published">
      <div class="lg:px-24 p-4 lg:p-8">
        <div class="flex md:flex-row flex-col flex-wrap">
          <div
            class="md:w-1/2 w-full flex flex-col pb-8 md:pr-8 transform hover:scale-105 transition duration-500 ease-in-out"
            v-if="blogs.length"
          >
            <img
              :src="'/storage/' + blogs[0].image"
              class="rounded-md cursor-pointer shadow-xl"
              loading="lazy"
              :alt="blogs[0].title"
              @click="goto(blogs[0])"
              width="1200"
              height="675"
            />
            <p
              class="-mt-6 text-white text-xs px-1 table rounded-md font-bold z-30 cursor-pointer"
              :class="'bg-' + blogs[0].channel.color + '-600'"
            >
              #{{ blogs[0].channel.name }}
            </p>
            <h4
              class="font-bold md:text-3xl text-2xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer pt-2 leading-tight"
              v-text="blogs[0].title"
              @click="goto(blogs[0])"
            ></h4>
            <span class="text-gray-600 font-light text-lg">{{ blogs[0].updated_at }}</span>
          </div>
          <div class="md:w-1/2 w-full md:pl-8">
            <div
              class="flex flex-row flex-wrap"
              v-for="(blog, index) in blogs"
              :key="blog.id"
              :class="index !== 0 ? 'pb-8' : ''"
            >
              <div
                class="w-1/2 md:pt-0 flex flex-col transform hover:scale-105 transition duration-500 ease-in-out"
                v-if="index !== 0"
              >
                <img
                  :src="'/storage/' + blog.image"
                  :alt="blogs.title"
                  loading="lazy"
                  class="lg:rounded-md rounded-t-md cursor-pointer shadow-xl"
                  @click="goto(blog)"
                  width="1200"
                  height="675"
                />
                <p
                  class="lg:-mt-6 text-center mt-0 text-xs px-1 lg:rounded-md rounded-b-md table text-white font-bold z-30 w-full lg:w-auto cursor-pointer"
                  :class="'bg-' + blog.channel.color + '-600'"
                >
                  #{{ blog.channel.name }}
                </p>
              </div>
              <div class="w-1/2 px-2 md:pl-4 justify-center flex flex-col" v-if="index !== 0">
                <h4
                  class="font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight"
                  v-text="blog.title"
                  @click="goto(blog)"
                ></h4>
                <span class="text-gray-600 font-light text-sm">{{ blog.updated_at }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="trendings">
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-3/4 w-full p-4 lg:p-8 lg:pl-24">
          <p class="text-3xl font-extrabold pb-8 text-teal-800">Popüler:</p>
          <div class="flex flex-row flex-wrap">
            <div
              class="lg:w-1/2 w-full flex flex-row pb-8"
              v-for="trending in trendings"
              :key="trending.id"
            >
              <div class="w-1/2 md:pt-0 flex flex-col transform hover:scale-105 transition duration-500 ease-in-out">
                <img
                  :src="'/storage/' + trending.image"
                  :alt="trending.title"
                  loading="lazy"
                   class="lg:rounded-md rounded-t-md cursor-pointer shadow-xl"
                  @click="goto(trending)"
                  width="1200"
                  height="675"
                />
                <p
                  class="lg:-mt-6 text-center mt-0 text-xs px-1 lg:rounded-md rounded-b-md table text-white font-bold z-30 w-full lg:w-auto cursor-pointer"
                  :class="'bg-' + trending.channel.color + '-600'"
                >
                  #{{ trending.channel.name }}
                </p>
              </div>
              <div class="w-1/2 px-2 md:pl-4 justify-center flex flex-col">
                <h4
                  class="font-bold md:text-xl text-lg hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight"
                  @click="goto(trending)"
                >
                  {{ trending.title }}
                </h4>
                <span class="text-gray-600 font-light text-sm">{{ trending.updated_at }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 w-full p-4 lg:p-8 lg:pr-24 rounded-lg">
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
