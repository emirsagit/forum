<template>
  <div class="bg-gray-100 text-gray-700" id="last-published">
    <div class="lg:px-24 p-8 flex lg:flex-row flex-col">
      <div class="lg:w-3/5 w-full">
        <div class="flex flex-row justify-between pb-4">
          <a class="text-sm font-semibold text-white px-2 py-1 rounded-md cursor-pointer" :class="'border border-' + blog.channel.color + '-600 text-' + blog.channel.color + '-500 hover:text-' + blog.channel.color + '-700'" :href="'/blogs/channels/' + blog.channel.slug"> #{{ blog.channel.name }} </a>
          <span class="ml-1 text-gray-500 text-xs">{{ parseInt(blog.visits_count) + 1 }} Görüntüleme</span>
        </div>
        <h1 class="text-2xl lg:text-3xl text-gray-700 font-bold pb-4 leading-tight">
          {{ blog.title }}
        </h1>
        <p class="text-lg pb-8 text-gray-700" v-if="blog.summary">
          {{ blog.summary }}
        </p>
        <img :src="'/storage/' + blog.image" :alt="blog.title" class="object-cover w-full mb-4 shadow-xl" width="1200" height="675" />
        <div class="pb-8 text-lg leading-loose text-justify p-link" v-html="blog.body"></div>
      </div>
      <div class="lg:w-2/5 w-full flex flex-col lg:pl-12">
        <div class="flex flex-row pb-8 items-center justify-center lg:justify-start">
          <avatar :item="blog"></avatar>
          <writer :item="blog"></writer>
        </div>
        <div class="flex flex-col pb-8 sticky top-0">
          <p class="text-gray-700 mb-4 text-xl font-semibold">{{ blog.channel.name }} ile ilgili diğer yazılar</p>
          <div class="flex-row flex items-center mb-4" v-for="relatedBlog in blogs" :key="relatedBlog.id">
            <span class="rounded-full mr-2 table" :class="'bg-gray-600'">
              <svg class="w-4 h-4">
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </span>
            <a :href="'/blog/' + relatedBlog.slug" class="text-gray-600 text-md hover:text-gray-700">
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
import Writer from "../../shared/Writer.vue";
export default {
  props: ["dataBlog", "dataBlogs"],
  data() {
    return {
      blog: this.dataBlog,
      blogs: this.dataBlogs,
    };
  },
  components: {
    Avatar,
    Writer,
  },
};
</script>
