<template>
  <div class="">
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
          <li class="pt-1 pb-1.5 mr-3 cursor-pointer">
            <a class="hover:text-shadow-sm">Sign Up</a>
          </li>
          <li
            class="pt-1 pb-1.5 px-6 lg:px-8 border rounded-xl hover:bg-white hover:text-black cursor-pointer hover:shadow-[#dcdae152] hover:shadow-lg"
          >
            <a>Log In</a>
          </li>
        </ul>
      </div>
    </navbar>

    <!-- introduction heading -->
    <div class="flex flex-wrap items-center mb-6 md:mb-12 w-fit">
      <h1 class="heading-text">DISCOVER</h1>
      <img src="./assets/landing-img01.jpg" class="heading-img" />
      <h1 class="heading-text">NEW</h1>
      <img src="./assets/landing-img02.jpg" class="heading-img" />
      <h1 class="heading-text">PODCASTS</h1>
      <img src="./assets/landing-img03.png" class="heading-img" />
      <h1 class="heading-text">EVERY DAY</h1>
    </div>

    <!-- main content -->
    <div class="md:flex md:justify-between">
      <!-- introduction text and button -->
      <div class="md:w-[55%]">
        <div>
          <p class="mb-4 lg:text-xl font-light">
            Award-winning podcasts that hook you in, make you think, or just make you laugh. Sign up
            and listen now.
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
              <img
                src="./assets/tiktok-logo.png"
                class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6"
              />
              <img
                src="./assets/youTube-logo.png"
                class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6"
              />
            </div>
            <div class="flex">
              <img
                src="./assets/disney-logo.png"
                class="h-6 object-contain mr-8 mt-4 xs:mr-4 md:h-5 lg:h-7"
              />
              <img
                src="./assets/netflix-logo.png"
                class="h-5 object-contain mr-4 mt-4 md:h-4 lg:h-6"
              />
            </div>
          </div>
        </div>
      </div>

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
                src="./assets/bannerImages/max-harlynking-vi0pHtiYjuo-unsplash 2.jpg"
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
                src="./assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
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
                src="./assets/bannerImages/daniel-korpai-8GDCzWrcE3M-unsplash.jpg"
                class="w-3/12 rounded-lg"
              />
              <div class="w-6/12">
                <p class="text-sm font-semibold">Ear Hustle</p>
                <p class="font-light">#category</p>
              </div>
            </div>
          </div>

          <div
            class="absolute top-0 right-0 w-0.5 h-[70px] mr-[0.18rem] bg-white rounded-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
