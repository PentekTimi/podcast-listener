<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-zinc-800 px-4 py-2 w-full">
    <!-- Track Info -->
    <div class="text-center" v-if="current_podcast.modified_name">
      <span class="song-title font-bold">{{ current_podcast.modified_name }}</span> by
      <span class="song-artist">{{ current_podcast.display_name }}</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- Play/Pause Button -->
      <button type="button" @click.prevent="toggleAudio">
        <font-awesome-icon v-if="!playing" class="text-zinc-400 text-xl w-4" icon="fa fa-play" />
        <font-awesome-icon v-else class="text-zinc-400 text-xl w-4" icon="fa fa-pause" />
      </button>
      <!-- Current Position -->
      <div class="player-currenttime">{{ seek }}</div>
      <!-- Scrub Container  -->
      <div
        class="w-full h-2 rounded bg-gray-200 relative cursor-pointer"
        @click.prevent="updateSeek"
      >
        <!-- Player Ball -->
        <span
          class="absolute -top-2.5 -ml-2.5 text-zinc-400 text-lg"
          :style="{ left: playerProgress }"
        >
          <font-awesome-icon icon="fas fa-circle" />
        </span>
        <!-- Player Progress Bar-->
        <span
          class="block h-2 rounded bg-gradient-to-r from-[#4EE4A2] to-[#4EE4A2]"
          :style="{ width: playerProgress }"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">{{ duration }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import usePlayerStore from '@/stores/player'
export default {
  name: 'AudioPlayer',
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio', 'updateSeek'])
  },
  computed: {
    ...mapState(usePlayerStore, [
      'playing',
      'seek',
      'duration',
      'playerProgress',
      'current_podcast'
    ])
  }
}
</script>
