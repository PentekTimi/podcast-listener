<template>
  <main>
    <nav-section></nav-section>
    <main-heading></main-heading>

    <div class="md:flex md:justify-between">
      <home-content></home-content>
      <podcast-list></podcast-list>
    </div>
  </main>
</template>

<script>
import NavSection from '../components/NavSection.vue'
import MainHeading from '../components/MainHeading.vue'
import PodcastList from '../components/PodcastList.vue'
import HomeContent from '../components/HomeContent.vue'

export default {
  name: 'App',
  components: {
    NavSection,
    MainHeading,
    PodcastList,
    HomeContent
  }
}
</script>
