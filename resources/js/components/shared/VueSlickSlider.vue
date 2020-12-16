<template>
  <div class="w-full pb-8">
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="slider in sliders"
        :key="slider.id"
        class="flex lg:flex-col flex-row"
        :style="{ height: '400px' }"
      >
        <a
          class="ml-2 px-2 py-1 rounded-lg text-sm text-white bg-gray-800 bg-opacity-50 cursor-pointer hover:bg-opacity-100 max-content font-bold z-10 absolute mt-10"
          v-if="slider"
          :href="'/blogs/' + slider.channel.slug + '/' + slider.slug"
        >
          {{ slider.title.substr(0, 60) }}</a
        >
        <img
          :src="'/storage/' + slider.image"
          :alt="slider.title"
          class="object-cover w-full cursor-pointer"
          @click="goto(slider)"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["blogs", "sliders"],
  name: "MyComponent",
  components: { VueSlickCarousel },
  methods: {
    goto(blog) {
      window.location.href="/blogs/"+blog.channel.slug+"/"+blog.slug
    }
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              dots: true,
              arrows: true,
              fade: true,
              infinite: true,
              speed: 500,
              vertical: true,
              verticalSwiping: true,
              swipeToSlide: true,
            },
          },
        ],
      },
    };
  },
};
</script>