<template>
  <nav-section></nav-section>
  <!-- Music Header -->
  <section class="w-full mb-8 py-14 text-center text-white relative">
    <div class="absolute inset-0 w-full h-full box-border bg-contain music-bg"></div>
    <div class="container mx-auto flex items-center bg-slate-600">
      <!-- Play/Pause Button -->
      <button
        type="button"
        class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
      >
        <font-awesome-icon icon="fas fa-play" />
      </button>
      <div class="z-50 text-left ml-8">
        <!-- Song Info -->
        <div class="text-3xl font-bold">{{ podcast.modified_name }}</div>
        <div>{{ podcast.genre }}</div>
      </div>
    </div>
  </section>
  <!-- Form -->
  <section class="container mx-auto mt-6">
    <div class="rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <!-- Comment Count -->
        <span class="card-title">Comments ({{ podcast.comment_count }})</span>
        <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
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
          <ErrorMessage name="comment" class="text-red-400"></ErrorMessage>
          <button
            type="submit"
            class="py-1.5 px-3 rounded text-white bg-green-600 block"
            :disabled="comment_in_submission"
          >
            Submit
          </button>
        </vee-form>
        <!-- Sort Comments -->
        <select
          v-model="sort"
          class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        >
          <option value="1">Latest</option>
          <option value="2">Oldest</option>
        </select>
      </div>
    </div>
  </section>
  <!-- Comments -->
  <ul class="container mx-auto">
    <li class="p-6 border border-gray-200" v-for="comment in sortedComments" :key="comment.docID">
      <!-- Comment Author -->
      <div class="mb-5">
        <div class="font-bold">{{ comment.name }}</div>
        <time>{{ comment.datePosted }}</time>
      </div>

      <p>
        {{ comment.content }}
      </p>
    </li>
  </ul>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
import { podcastsCollection, auth, commentsCollection } from '@/includes/firebase'
import { doc, getDoc, addDoc, query, where, getDocs, updateDoc } from 'firebase/firestore'
import { mapState } from 'pinia'
import useUserStore from '@/stores/user'

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
      comment_alert_variant: 'bg-blue-500',
      comment_alert_msg: 'Please wait, your comment is being submitted.',
      comments: [],
      sort: '1'
    }
  },
  computed: {
    ...mapState(useUserStore, ['userLoggedIn']),
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
    async addComment(values, { resetForm }) {
      this.comment_in_submission = true
      this.comment_show_alert = true
      this.comment_alert_variant = 'bg-blue-500'
      this.comment_alert_msg = 'Please wait, your comment is being submitted.'

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        podcastId: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid
      }

      await addDoc(commentsCollection, comment)
      this.podcast.comment_count += 1
      const docRef = doc(podcastsCollection, this.$route.params.id)
      await updateDoc(docRef, {
        comment_count: this.podcast.comment_count
      })

      this.getComments()

      //this.comment_alert_variant = 'bg-red-500'
      //this.comment_alert_msg = 'Failed to add comment, please try again later.'

      this.comment_in_submission = false
      this.comment_alert_variant = 'bg-green-500'
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
  async created() {
    const docRef = doc(podcastsCollection, this.$route.params.id)
    const docSnapshot = await getDoc(docRef)

    if (!docSnapshot.exists()) {
      this.$router.push({ name: 'home' })
      return
    }

    const { sort } = this.$route.query
    this.sort = sort == '1' || sort == '2' ? sort : '1'

    this.podcast = docSnapshot.data()
    this.getComments()
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
