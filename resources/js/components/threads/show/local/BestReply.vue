<template>
  <div>
    <div class="flex mx-4 mb-4 pl-4 bg-teal-100 rounded-lg" v-if="reply">
      <div class="flex mr-2 p-2">1</div>
      <div class="flex flex-1 mr-2 p-2">
        <div class="flex flex-col w-full">
          <div class="flex items-center mb-2">
            <div class="flex items-center" v-if="reply.owner">
              <a :href="'/profiles/' + reply.owner.username">
                <h4 class="font-bold text-l cursor-pointer hover:underline">
                  {{ reply.owner.username }}
                </h4>
              </a>
            </div>
            <p
              class="text-xs text-gray-500 ml-2 flex-1"
              v-text="reply.created_at"
            ></p>
            <div
              class="bg-green-600 text-white px-2 py-1 rounded-lg flex flex-row text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p>En İyi Cevap</p>
            </div>
          </div>
          <p class="text-sm text-gray-700 mb-2" v-html="reply.body"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["reply"],
};
</script>

