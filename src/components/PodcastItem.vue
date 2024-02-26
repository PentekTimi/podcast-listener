<template>
  <router-link :to="{ name: 'podcast', params: { id: podcast.docID } }">
    <li
      class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
    >
      <div class="max-w-[70%]">
        <p class="font-bold block text-zinc-400 break-words text-wrap">
          {{ podcast.modified_name }}
        </p>
        <span class="text-zinc-500 text-sm">{{ podcast.display_name }}</span>
      </div>

      <div class="text-zinc-600 text-lg">
        <router-link
          custom
          :to="{ name: 'podcast', params: { id: podcast.docID }, hash: '#comments' }"
          v-slot="{ navigate }"
        >
          <span class="comments" @click="navigate">
            <font-awesome-icon icon="fa fa-comment " class="text-zinc-600" />
            {{ podcast.comment_count }}
          </span>
        </router-link>
      </div>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'PodcastItem',
  props: ['podcast']
}
</script>
