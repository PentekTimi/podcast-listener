<template>
  <div>
    <nav-section></nav-section>
    <dashboard-intro></dashboard-intro>

    <section class="container mx-auto">
      <div class="rounded border border-gray-200 relative flex flex-col mb-10">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <!-- Icon -->
          <font-awesome-icon
            icon="fa fa-headphones-alt"
            class="float-right text-green-400 text-xl"
          />
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <podcast-item
            v-for="podcast in podcasts"
            :key="podcast.docID"
            :podcast="podcast"
          ></podcast-item>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </div>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
import DashboardIntro from '@/components/DashboardIntro.vue'
import PodcastItem from '@/components/PodcastItem.vue'
import { podcastsCollection } from '@/includes/firebase'
import { query, orderBy, limit, getDocs, startAfter, getDoc, doc } from 'firebase/firestore'
export default {
  name: 'DashboardView',
  components: {
    NavSection,
    DashboardIntro,
    PodcastItem
  },
  data() {
    return {
      podcasts: [],
      maxPerPage: 6,
      pendingRequest: false
    }
  },
  async created() {
    this.getPodcasts()

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

      if (bottomOfWindow) {
        this.getPodcasts()
      }
    },
    async getPodcasts() {
      if (this.pendingRequest) {
        return
      }

      this.pendingRequest = true

      let q
      if (this.podcasts.length) {
        const lastDoc = await getDoc(
          doc(podcastsCollection, this.podcasts[this.podcasts.length - 1].docID)
        )
        q = query(
          podcastsCollection,
          orderBy('modified_name'),
          startAfter(lastDoc),
          limit(this.maxPerPage)
        )
      } else {
        q = query(podcastsCollection, orderBy('modified_name'), limit(this.maxPerPage))
      }

      const snapshots = await getDocs(q)

      snapshots.forEach((document) => {
        this.podcasts.push({
          docID: document.id,
          ...document.data()
        })
      })

      this.pendingRequest = false
    }
  }
}
</script>
