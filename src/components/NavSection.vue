<template>
  <!-- navbar -->
  <nav class="flex justify-between mb-12">
    <div>
      <h2 class="">PODCASTIN'</h2>
    </div>
    <div class="">
      <div class="relative sm:hidden w-6 cursor-pointer" @click="showMenu">
        <img src="../assets/hamburger-menu.png" class="relative z-10" />

        <transition
          leave-active-class="transform transition duration-300 ease-custom"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <ul
            v-show="menu"
            class="absolute right-0 ml-[10%] mt-2 w-[150px] bg-gradient-to-b from-[#00000033] to-black"
          >
            <li class="relative p-2"><a href="">Log In</a></li>
            <li class="relative px-2 pb-4"><a href="">Sign Up</a></li>
          </ul>
        </transition>
      </div>
    </div>

    <div class="hidden sm:block">
      <ul class="flex">
        <li class="pt-1 pb-1.5 mr-3 cursor-pointer">
          <a href="" class="hover:text-shadow-sm">Sign Up</a>
        </li>
        <li
          class="pt-1 pb-1.5 px-6 lg:px-8 border rounded-xl hover:bg-white hover:text-black cursor-pointer hover:shadow-[#dcdae152] hover:shadow-lg"
        >
          <a href="">Log In</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    showMenu() {
      this.menu = !this.menu
    }
  }
}
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
