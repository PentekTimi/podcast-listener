<template>
  <div>
    <nav-section></nav-section>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="col-span-1">
          <!-- upload -->
          <app-upload :addPodcast="addPodcast"></app-upload>
        </div>

        <div class="col-span-2">
          <!-- song list -->
          <div
            class="bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )] rounded relative flex flex-col"
          >
            <div class="px-6 pt-6 pb-5 font-bold">
              <span class="card-title text-md">{{ $t('manage.manageTitle') }}</span>
              <font-awesome-icon
                icon="fa fa-compact-disc"
                class="float-right text-zinc-800 text-2xl"
              />
            </div>
            <div class="px-6 pb-6 pt-4">
              <!-- Composition Items -->
              <composition-item
                v-for="(podcast, i) in podcasts"
                :key="podcast.docID"
                :podcast="podcast"
                :updatePodcast="updatePodcast"
                :index="i"
                :removePodcast="removePodcast"
                :updateUnsavedFlag="updateUnsavedFlag"
              ></composition-item>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
import AppUpload from '@/components/AppUpload.vue'
import CompositionItem from '@/components/CompositionItem.vue'
import { auth, podcastsCollection } from '@/includes/firebase'
import { where, query, getDocs } from 'firebase/firestore'

export default {
  name: 'manage-view',
  components: {
    NavSection,
    AppUpload,
    CompositionItem
  },
  data() {
    return {
      podcasts: [],
      unsavedFlag: false
    }
  },
  async created() {
    const q = query(podcastsCollection, where('uid', '==', auth.currentUser.uid))
    const snapshot = await getDocs(q)

    snapshot.forEach(this.addPodcast)
  },
  methods: {
    updatePodcast(i, values) {
      this.podcasts[i].modified_name = values.modified_name
      this.podcasts[i].genre = values.genre
    },
    removePodcast(i) {
      this.podcasts.splice(i, 1)
    },
    addPodcast(document) {
      const podcast = {
        ...document.data(),
        docID: document.id
      }

      this.podcasts.push(podcast)
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next()
    } else {
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?')
      next(leave)
    }
  }
}
</script>
