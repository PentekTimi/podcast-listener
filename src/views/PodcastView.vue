<template>
  <nav-section></nav-section>
  <div>podcast single</div>
  <div>{{ $route.params.id }}</div>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
export default {
  name: 'PodcastView',
  components: {
    NavSection
  }
}
</script>
