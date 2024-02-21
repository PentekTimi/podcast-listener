<template>
  <div
    class="rounded bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )] relative flex flex-col"
  >
    <div class="px-6 pt-6 pb-5 font-bold">
      <span class="card-title text-md">Upload</span>
      <font-awesome-icon icon="fas fa-upload" class="float-right text-zinc-800 text-2xl" />
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
        class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white"
        :class="{ 'bg-[#4EE4A2] border-[#4EE4A2] border-solid': is_dragover }"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="is_dragover = false"
        @dragover.prevent.stop="is_dragover = true"
        @dragenter.prevent.stop="is_dragover = true"
        @dragleave.prevent.stop="is_dragover = false"
        @drop.prevent.stop="upload($event)"
      >
        <h5 class="pointer-events-none">Drop your files here</h5>
      </div>
      <input type="file" multiple @change="upload($event)" class="mt-6 mb-5" />

      <!-- Progess Bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <!-- File Name -->
        <div class="font-bold text-sm" :class="upload.text_class">
          <font-awesome-icon :icon="upload.icon" :class="upload.icon_animation" /> {{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar"
            :class="upload.variant"
            :style="{ width: upload.current_progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, auth, podcastsCollection } from '../includes/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'

export default {
  name: 'AppUpload',
  data() {
    return {
      is_dragover: false,
      uploads: []
    }
  },
  methods: {
    upload($event) {
      this.is_dragover = false

      // convert obj to array
      const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]

      files.forEach((file) => {
        if (file.type !== 'audio/mpeg') {
          console.log('wrong file type')
          return
        }

        const storageReference = ref(storage) // podcastin-fed64.appspot.com
        const podcastRef = ref(storageReference, `/podcasts/${file.name}`)

        const uploadTask = uploadBytesResumable(podcastRef, file)

        const uploadIndex =
          this.uploads.push({
            uploadTask,
            current_progress: 0,
            name: file.name,
            variant: 'bg-blue-400',
            icon: 'fas fa-spinner',
            icon_animation: 'fa-spin',
            text_class: ''
          }) - 1

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploads[uploadIndex].current_progress = progress
          },
          (error) => {
            // on error
            this.uploads[uploadIndex].variant = 'bg-red-400'
            this.uploads[uploadIndex].icon = 'fas fa-times'
            this.uploads[uploadIndex].icon_animation = ''
            this.uploads[uploadIndex].text_class = 'text-red-400'
            console.log(error)
          },
          async () => {
            // on success
            const podcast = {
              uid: auth.currentUser.uid,
              display_name: auth.currentUser.displayName,
              original_name: uploadTask.snapshot.ref.name,
              modified_name: uploadTask.snapshot.ref.name,
              genre: '',
              comment_count: 0
            }

            podcast.url = await getDownloadURL(uploadTask.snapshot.ref)
            await addDoc(podcastsCollection, podcast)

            this.uploads[uploadIndex].variant = 'bg-[#4EE4A2]'
            this.uploads[uploadIndex].icon = 'fas fa-check'
            this.uploads[uploadIndex].icon_animation = ''
            this.uploads[uploadIndex].text_class = 'text-[#4EE4A2]'
          }
        )
      })
      console.log(files)
    }
  },
  beforeUnmount() {
    this.uploads.forEach((upload) => {
      upload.uploadTask.cancel()
    })
  }
}
</script>
