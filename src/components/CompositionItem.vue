<template>
  <div class="px-3 pb-3 mb-4">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ podcast.modified_name }}</h4>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#CF6679] float-right"
        @click.prevent="deletePodcast"
      >
        <font-awesome-icon icon="fa fa-times" />
      </button>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#e4aa57] float-right"
        @click.prevent="showForm = !showForm"
      >
        <font-awesome-icon icon="fa fa-pencil-alt" />
      </button>
    </div>
    <div v-show="showForm">
      <div
        class="text-white text-center font-bold p-4 mb-4"
        v-if="show_alert"
        :class="alert_variant"
      >
        {{ alert_message }}
      </div>
      <vee-form class="mt-4" :validation-schema="schema" :initial-values="podcast" @submit="edit">
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field
            name="modified_name"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Song Title"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="modified_name" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field
            name="genre"
            type="text"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Genre"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button
          type="submit"
          class="py-1.5 px-3 mr-3 rounded text-white bg-[#BB86FC]"
          :disabled="in_submission"
        >
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 mr-3 rounded text-white bg-gray-700"
          :disabled="in_submission"
          @click.prevent="showForm = false"
        >
          Go Back
        </button>
      </vee-form>
      <hr class="my-6" />
    </div>
  </div>
</template>

<script>
import { podcastsCollection, storage } from '@/includes/firebase'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'

export default {
  name: 'CompositionItem',
  props: {
    podcast: {
      type: Object,
      required: true
    },
    updatePodcast: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    removePodcast: {
      type: Function,
      required: true
    },
    updateUnsavedFlag: {
      type: Function
    }
  },
  data() {
    return {
      showForm: false,
      schema: {
        modified_name: 'required',
        genre: 'alpha_spaces'
      },
      in_submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_message: 'Please wait, updating podcast information.'
    }
  },
  methods: {
    async edit(values) {
      this.in_submission = true
      this.show_alert = true
      this.alert_variant = 'bg-blue-500'
      this.alert_message = 'Please wait, updating podcast information.'

      const podcastRef = doc(podcastsCollection, this.podcast.docID)

      try {
        await updateDoc(podcastRef, values)
      } catch (error) {
        this.in_submission = false
        this.alert_variant = 'bg-red-500'
        this.alert_message = 'Something went wrong, please try again later.'
        return
      }

      this.updatePodcast(this.index, values)
      this.updateUnsavedFlag(false)

      this.in_submission = false
      this.alert_variant = 'bg-green-500'
      this.alert_message = 'Success!'
    },
    async deletePodcast() {
      const storageRef = ref(storage)
      const storagePodcastRef = ref(storageRef, `podcasts/${this.podcast.original_name}`)

      await deleteObject(storagePodcastRef)

      const firestorePodcastRef = doc(podcastsCollection, this.podcast.docID)
      await deleteDoc(firestorePodcastRef)

      this.removePodcast(this.index)
    }
  }
}
</script>
