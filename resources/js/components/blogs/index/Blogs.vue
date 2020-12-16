<template>
  <div>
    <div class="bg-gray-300" id="slider">
      <div class="lg:px-24 lg:pt-8 pb-8 lg:pb-0">
        <slider
          :blogs="blogs"
          :sliders="dataSliders"
          v-if="dataSliders.length"
        ></slider>
      </div>
    </div>
    <div class="bg-gray-200" id="last-published">
      <div class="lg:px-24 p-8">
        <p class="text-3xl text-teal-700 font-extrabold pb-8">
          Son Paylaşılanlar:
        </p>
        <div class="flex md:flex-row flex-col flex-wrap">
          <div class="md:w-1/2 w-full flex flex-col pb-8 md:pr-8">
            <img
              :src="'/storage/' + blogs[0].image"
              class="rounded-md hover:opacity-75 cursor-pointer shadow-xl"
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
              class="font-bold md:text-3xl text-2xl hover:opacity-75 cursor-pointer pt-2 leading-tight"
              v-text="blogs[0].title"
              @click="goto(blogs[0])"
            ></h4>
            <!-- <p
              class="text-gray-700 text-lg leading-tight hidden lg:flex"
              v-text="blogs[0].summary"
              v-if="blogs[0].summary"
            ></p> -->
            <p></p>
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
                  class="rounded-md hover:opacity-75 cursor-pointer shadow-xl"
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
                  class="font-bold md:text-2xl text-xl hover:opacity-75 cursor-pointer leading-tight"
                  v-text="blog.title"
                  @click="goto(blog)"
                ></h4>
                <!-- <p
                  class="text-gray-800 leading-tight hidden lg:flex"
                  v-text="blog.summary"
                  v-if="blog.summary"
                ></p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300" id="last-published">
      <div class="lg:px-24 p-8">
        <p class="text-3xl text-teal-700 font-extrabold pb-8">Öne Çıkanlar:</p>
        <div class="flex md:flex-row flex-col flex-wrap">
          <div class="md:w-1/2 w-full flex flex-col pb-8 md:pr-8">
            <img
              :src="'/storage/' + blogs[0].image"
              class="rounded-md hover:opacity-75 cursor-pointer shadow-xl"
              loading="lazy"
              :alt="blogs[0].title"
            />
            <p
              class="-mt-6 text-white text-sm px-1 table rounded-md font-semibold"
              :class="'bg-' + blogs[0].channel.color + '-600'"
            >
              #{{ blogs[0].channel.name }}
            </p>
            <h4
              class="font-bold md:text-3xl text-2xl hover:opacity-75 cursor-pointer pt-2 leading-tight"
              v-text="blogs[0].title"
            ></h4>
            <!-- <p
              class="text-gray-700 text-lg leading-tight hidden lg:flex"
              v-text="blogs[0].summary"
              v-if="blogs[0].summary"
            ></p> -->
            <p></p>
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
                  class="rounded-md hover:opacity-75 cursor-pointer shadow-xl"
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
                  class="font-bold md:text-2xl text-xl hover:opacity-75 cursor-pointer leading-tight"
                  v-text="blog.title"
                ></h4>
                <p
                  class="text-gray-800 leading-tight hidden lg:flex"
                  v-text="blog.summary"
                  v-if="blog.summary"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../shared/VueSlickSlider.vue";
export default {
  props: ["dataBlogs", "dataSliders"],
  data() {
    return {
      blogs: this.dataBlogs,
    };
  },
  components: {
    Slider,
  },
  methods: {
    goto(blog) {
      window.location.href = '/blogs/'+blog.channel.slug+'/'+blog.slug;
    }
  },
};
</script>
