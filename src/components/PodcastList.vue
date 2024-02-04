<template>
  <!-- top podcasts of the week -->
  <div class="mb-6 md:w-[40%] max-w-[325px]">
    <h4 class="mb-4">Top Podcasts of the week</h4>

    <!-- podcast scroll box -->
    <div
      class="relative customised-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-white scrollbar-rounded-full overflow-y-scroll h-40 xs:h-48 lg:h-52"
    >
      <!-- group of podcasts -->
      <div>
        <!-- individual podcast -->
        <div class="flex flex-wrap h-auto items-center justify-between">
          <p class="w-1/12 font-bold text-lg">01.</p>
          <img
            src="../assets/bannerImages/max-harlynking-vi0pHtiYjuo-unsplash 2.jpg"
            class="w-3/12 xs:max-w-[80px] md:max-w-[100px] rounded-lg"
          />
          <div class="w-6/12">
            <p class="text-sm font-semibold">Comedy sunday</p>
            <p class="font-light">#category</p>
          </div>
        </div>

        <hr class="w-[95%] opacity-10 my-5" />

        <div class="flex flex-wrap h-auto items-center justify-between">
          <p class="w-1/12 font-bold text-lg">02.</p>
          <img
            src="../assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
            class="w-3/12 rounded-lg"
          />
          <div class="w-6/12">
            <p class="text-sm font-semibold">Ear Hustle</p>
            <p class="font-light">#category</p>
          </div>
        </div>
        <hr class="w-[95%] opacity-10 my-5" />
        <div class="flex flex-wrap h-auto items-center justify-between">
          <p class="w-1/12 font-bold text-lg">02.</p>
          <img
            src="../assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
            class="w-3/12 rounded-lg"
          />
          <div class="w-6/12">
            <p class="text-sm font-semibold">Ear Hustle</p>
            <p class="font-light">#category</p>
          </div>
        </div>
      </div>

      <div class="absolute top-0 right-0 w-0.5 h-[70px] mr-[0.18rem] bg-white rounded-full"></div>
    </div>
  </div>
</template>
