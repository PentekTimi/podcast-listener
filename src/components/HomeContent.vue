<template>
  <!-- introduction text and button -->
  <div class="md:w-[55%]">
    <div>
      <p class="mb-4 lg:text-xl font-light">
        Award-winning podcasts that hook you in, make you think, or just make you laugh. Sign up and
        listen now.
      </p>

      <div
        class="animated-box inline-block pt-2 pb-2.5 px-6 lg:px-8 border rounded-xl mb-10 md:mb-5 cursor-pointer"
      >
        <span class="span-hide"></span>
        <p class="flex content-center z-10">
          <span class="lg:text-lg">Get Started</span>
          <span class="relative top-1.5 ml-2.5">
            <svg
              class="w-4 lg:w-5"
              width="16"
              height="16"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7314 1H59.9256M59.9256 1L59.9256 45.1942M59.9256 1L1 59.9256"
                stroke="white"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>

    <!-- supported by -->
    <div class="mb-8">
      <p class="text-xs font-bold">Supported by</p>
      <div class="flex flex-wrap w-full">
        <div class="flex">
          <img src="../assets/tiktok-logo.png" class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6" />
          <img
            src="../assets/youTube-logo.png"
            class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6"
          />
        </div>
        <div class="flex">
          <img
            src="../assets/disney-logo.png"
            class="h-6 object-contain mr-8 mt-4 xs:mr-4 md:h-5 lg:h-7"
          />
          <img
            src="../assets/netflix-logo.png"
            class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>
