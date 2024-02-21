<template>
  <nav-section></nav-section>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <!-- upload -->
        <app-upload></app-upload>
      </div>

      <div class="col-span-2">
        <!-- song list -->
        <div
          class="bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )] rounded relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold">
            <span class="card-title text-md">My Songs</span>
            <font-awesome-icon
              icon="fa fa-compact-disc"
              class="float-right text-zinc-800 text-2xl"
            />
          </div>
          <div class="px-6 pb-6 pt-4">
            <!-- Composition Items -->
            <div class="px-3 pb-3 mb-4">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#CF6679] float-right">
                  <font-awesome-icon icon="fa fa-times" />
                </button>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#e4aa57] float-right">
                  <font-awesome-icon icon="fa fa-pencil-alt" />
                </button>
              </div>
              <div>
                <form class="mt-4">
                  <div class="mb-3">
                    <label class="inline-block mb-2">Song Title</label>
                    <input
                      type="text"
                      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                      placeholder="Enter Song Title"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="inline-block mb-2">Genre</label>
                    <input
                      type="text"
                      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                      placeholder="Enter Genre"
                    />
                  </div>
                  <button type="submit" class="py-1.5 px-3 mr-3 rounded text-white bg-[#BB86FC]">
                    Submit
                  </button>
                  <button type="button" class="py-1.5 px-3 mr-3 rounded text-white bg-gray-700">
                    Go Back
                  </button>
                </form>
              </div>
            </div>
            <hr class="my-6" />
            <div class="p-3 mb-4">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#CF6679] float-right">
                  <font-awesome-icon icon="fa fa-times" />
                </button>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-[#e4aa57] float-right">
                  <font-awesome-icon icon="fa fa-pencil-alt" />
                </button>
              </div>
            </div>
            <div class="p-3 mb-4">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                  <i class="fa fa-times"></i>
                </button>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="p-3 mb-4">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                  <i class="fa fa-times"></i>
                </button>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="p-3 mb-4">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
                  <i class="fa fa-times"></i>
                </button>
                <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right">
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavSection from '@/components/NavSection.vue'
import AppUpload from '@/components/AppUpload.vue'

export default {
  name: 'manage-view',
  components: {
    NavSection,
    AppUpload
  }
}
</script>
