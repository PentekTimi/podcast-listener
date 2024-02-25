<template>
  <main>
    <nav-section></nav-section>
    <!-- Music Header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg"></div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button
          type="button"
          class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
          @click.prevent="newPodcast(podcast)"
        >
          <font-awesome-icon v-if="!playing" icon="fas fa-play" />
          <font-awesome-icon v-if="playing" icon="fas fa-rotate-left" />
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ podcast.modified_name }}</div>
          <div>{{ podcast.genre }}</div>
        </div>
      </div>
    </section>
    <!-- Form -->
    <section class="container mx-auto mt-6" id="comments">
      <div
        class="relative flex flex-col bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )] rounded"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200 border-opacity-30">
          <!-- Comment Count -->
          <span class="card-title">{{
            $tc('podcast.comment_count', podcast.comment_count, { count: podcast.comment_count })
          }}</span>
          <font-awesome-icon icon="fa fa-comment" class="float-right text-zinc-800 text-2xl" />
        </div>
        <div class="p-6">
          <div
            class="text-white text-center font-bold p-4 mb-4"
            v-if="comment_show_alert"
            :class="comment_alert_variant"
          >
            {{ comment_alert_msg }}
          </div>
          <vee-form :validation-schema="schema" @submit="addComment" v-if="userLoggedIn">
            <vee-field
              as="textarea"
              name="comment"
              class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."
            ></vee-field>
            <ErrorMessage name="comment" class="text-[#CF6679]"></ErrorMessage>
            <button
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-[#4EE4A2] block"
              :disabled="comment_in_submission"
            >
              {{ $t('auth.cta') }}
            </button>
          </vee-form>
          <!-- Sort Comments -->
          <select
            v-model="sort"
            class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          >
            <option value="1">{{ $t('podcast.latest') }}</option>
            <option value="2">{{ $t('podcast.oldest') }}</option>
          </select>
        </div>
        <hr class="w-full opacity-10 mt-4 bg-white" />
      </div>
    </section>
    <!-- Comments -->
    <ul
      class="container mx-auto mb-[10%] bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )] rounded"
    >
      <li class="px-6 pt-6" v-for="comment in sortedComments" :key="comment.docID">
        <!-- Comment Author -->
        <div class="mb-5">
          <div class="font-bold">{{ comment.name }}</div>
          <time class="text-xs">{{ comment.datePosted }}</time>
        </div>

        <p>
          {{ comment.content }}
        </p>
        <hr class="w-full opacity-10 mt-4 bg-white" />
      </li>
    </ul>
  </main>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
import { podcastsCollection, auth, commentsCollection } from '@/includes/firebase'
import { doc, getDoc, addDoc, query, where, getDocs, updateDoc } from 'firebase/firestore'
import { mapState, mapActions } from 'pinia'
import useUserStore from '@/stores/user'
import usePlayerStore from '@/stores/player'

export default {
  name: 'PodcastView',
  components: {
    NavSection
  },
  data() {
    return {
      podcast: {},
      schema: {
        comment: 'required|min:3'
      },
      comment_in_submission: false,
      comment_show_alert: false,
      comment_alert_variant: 'bg-[#BB86FC]',
      comment_alert_msg: 'Please wait, your comment is being submitted.',
      comments: [],
      sort: '1'
    }
  },
  computed: {
    ...mapState(useUserStore, ['userLoggedIn']),
    ...mapState(usePlayerStore, ['playing']),
    sortedComments() {
      return this.comments.slice().sort((a, b) => {
        if (this.sort === '1') {
          return new Date(b.datePosted) - new Date(a.datePosted)
        }
        return new Date(a.datePosted) - new Date(b.datePosted)
      })
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['newPodcast']),
    async addComment(values, { resetForm }) {
      this.comment_in_submission = true
      this.comment_show_alert = true
      this.comment_alert_variant = 'bg-[#BB86FC]'
      this.comment_alert_msg = 'Please wait, your comment is being submitted.'

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        podcastId: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid
      }

      try {
        await addDoc(commentsCollection, comment)
        this.podcast.comment_count += 1
        const docRef = doc(podcastsCollection, this.$route.params.id)
        await updateDoc(docRef, {
          comment_count: this.podcast.comment_count
        })

        this.getComments()
      } catch (error) {
        this.comment_alert_variant = 'bg-[#CF6679]'
        this.comment_alert_msg = 'Failed to add comment, please try again later.'
      }

      this.comment_in_submission = false
      this.comment_alert_variant = 'bg-[#4EE4A2]'
      this.comment_alert_msg = 'Success! Your comment has been added.'

      resetForm()
    },
    async getComments() {
      const q = query(commentsCollection, where('podcastId', '==', this.$route.params.id))
      const snapshots = await getDocs(q)

      this.comments = []

      snapshots.forEach((doc) => {
        this.comments.push({
          docID: doc.id,
          ...doc.data()
        })
      })
    }
  },
  async beforeRouteEnter(to, from, next) {
    const docRef = doc(podcastsCollection, to.params.id)
    const docSnapshot = await getDoc(docRef)

    next((vm) => {
      if (!docSnapshot.exists()) {
        vm.$router.push({ name: 'home' })
        return
      }

      const { sort } = vm.$route.query
      vm.sort = sort == '1' || sort == '2' ? sort : '1'

      vm.podcast = docSnapshot.data()
      vm.getComments()
    })
  },
  watch: {
    sort(newVal) {
      if (newVal === this.$route.query.sort) {
        return
      }

      this.$router.push({
        query: {
          sort: newVal
        }
      })
    }
  }
}
</script>
