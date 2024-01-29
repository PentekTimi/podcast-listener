<template>
  <!-- navbar -->
  <navbar class="flex justify-between mb-12">
    <div>
      <h2 class="">PODCASTIN'</h2>
    </div>
    <div class="sm:hidden w-6">
      <img src="./assets/hamburger-menu.png" />
    </div>
    <div class="hidden sm:block">
      <ul class="flex">
        <li><a>Log In</a></li>
        <li><a>Sign Up</a></li>
      </ul>
    </div>
  </navbar>

  <!-- introduction heading -->
  <div class="flex flex-wrap mb-6">
    <h1 class="text-xl">DISCOVER</h1>
    <img src="./assets/landing-img01.jpg" class="h-[32px] rounded-full ml-1.5 mr-1" />
    <h1 class="text-xl">NEW</h1>
    <img src="./assets/landing-img02.jpg" class="h-[32px] rounded-full ml-1.5 mr-1" />
    <h1 class="text-xl">PODCASTS</h1>
    <img src="./assets/landing-img03.png" class="h-[32px] rounded-full ml-1.5 mr-1" />
    <h1 class="text-xl">EVERY DAY.</h1>
  </div>

  <!-- main content -->
  <div>
    <!-- introduction text and button -->
    <div>
      <p class="mb-4">
        Award-winning podcasts that hook you in, make you think, or just make you laugh. Sign up and
        listen now.
      </p>

      <div class="inline-block pt-2 pb-2.5 px-6 border rounded-xl mb-8">
        <p class="flex content-center">
          <span class="">Get Started</span>
          <span class="relative top-1.5 ml-2.5">
            <svg
              class="w-4"
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
      <p class="text-sm font-bold">Supported by</p>
      <div class="flex flex-wrap">
        <img src="./assets/tiktok-logo.png" class="h-5 w-auto mr-4 mt-4" />
        <img src="./assets/youTube-logo.png" class="h-5 w-auto mr-4 mt-4" />
        <img src="./assets/disney-logo.png" class="h-6 w-auto mr-4 mt-4" />
        <img src="./assets/netflix-logo.png" class="h-5 w-auto mr-4 mt-4" />
      </div>
    </div>

    <!-- top podcasts of the week -->
    <div class="mb-6">
      <h4 class="mb-4">Top Podcasts of the week</h4>

      <!-- podcast scroll box -->
      <div class="overflow-y-auto h-28 w-full">
        <!-- group of podcasts -->
        <div>
          <!-- individual podcast -->
          <div class="flex flex-wrap h-auto items-center justify-between mb-4">
            <p class="w-1/12 font-bold text-lg">01.</p>
            <img
              src="./assets/bannerImages/max-harlynking-vi0pHtiYjuo-unsplash 2.jpg"
              class="w-3/12 rounded-lg"
            />
            <div class="w-6/12">
              <p class="text-sm font-semibold">Comedy sunday</p>
              <p class="font-light">#category</p>
            </div>
          </div>

          <div class="flex flex-wrap h-auto items-center justify-between mb-4">
            <p class="w-1/12 font-bold text-lg">02.</p>
            <img
              src="./assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
              class="w-3/12 rounded-lg"
            />
            <div class="w-6/12">
              <p class="text-sm font-semibold">Ear Hustle</p>
              <p class="font-light">#category</p>
            </div>
          </div>

          <div class="flex flex-wrap h-auto items-center justify-between mb-4">
            <p class="w-1/12 font-bold text-lg">02.</p>
            <img
              src="./assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
              class="w-3/12 rounded-lg"
            />
            <div class="w-6/12">
              <p class="text-sm font-semibold">Ear Hustle</p>
              <p class="font-light">#category</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
