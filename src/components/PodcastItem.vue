<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
  >
    <div>
      <router-link
        :to="{ name: 'podcast', params: { id: podcast.docID } }"
        class="font-bold block text-gray-600"
        >{{ podcast.modified_name }}</router-link
      >
      <span class="text-gray-500 text-sm">{{ podcast.display_name }}</span>
    </div>

    <div class="text-gray-600 text-lg">
      <span class="comments">
        <i class="fa fa-comments text-gray-600"></i>
        {{ podcast.comment_count }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'PodcastItem',
  props: ['podcast']
}
</script>
