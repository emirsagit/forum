<template>
  <div class="bg-gray-100 text-gray-700" id="last-published">
    <div class="lg:px-24 p-8 flex flex-row">
      <div class="lg:w-3/5 w-full">
        <p
          class="text-lg font-bold text-white table px-1 rounded-lg"
          :class="'bg-' + blog.channel.color + '-600'"
        >
          #{{ blog.channel.name }}
        </p>
        <h1 class="text-4xl text-teal-700 font-bold pb-4 leading-tight">
          {{ blog.title }}
        </h1>
        <p class="text-2xl pb-8 text-black" v-if="blog.summary">
          {{ blog.summary }}
        </p>
        <img
          :src="'/storage/' + blog.image"
          :alt="blog.title"
          class="object-cover w-full mb-8 shadow-xl"
        />
        <div class="pb-8 text-xl leading-loose text-justify p-link" v-html="blog.body">
        </div>
      </div>
      <div class="lg:w-2/5 hidden lg:flex lg:flex-col pl-12">
        <div class="flex flex-row pb-8 items-center">
          <avatar :item="blog"></avatar>
          <div class="md:flex flex-col">
            <p class="ml-2 text-lg font-semibold">
              {{ blog.owner.name }} tarafından yazıldı.
            </p>
            <p class="ml-2 text-md">
              {{ blog.updated_at }} güncellendi
            </p>
            <hr class="bg-teal-700 h-2 shadow-lg rounded-lg mt-2 ml-2" />
          </div>
        </div>
        <div class="flex flex-col pb-8 sticky top-0">
            <p class="text-teal-700 mb-2 text-2xl font-semibold">{{blog.channel.name}} ile ilgili diğer yazılar</p>
          <div class="flex-row flex items-center mb-4" v-for="relatedBlog in blogs" :key="relatedBlog.id">
            <span
              class="rounded-full mr-2 table"
              :class="'bg-' + relatedBlog.channel.color + '-600'"
            >
              <svg class="w-4 h-4">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </span>
            <a :href="'/blogs/'+relatedBlog.channel.slug+'/'+relatedBlog.slug" class="text-teal-600 text-lg hover:text-teal-800">
              {{ relatedBlog.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../shared/Avatar.vue";
export default {
  props: ["dataBlog", 'dataBlogs'],
  data() {
    return {
      blog: this.dataBlog,
      blogs: this.dataBlogs
    };
  },
  components: {
    Avatar,
  },
};
</script>
