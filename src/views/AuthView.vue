<template>
  <!-- small screen forms -->
  <div class="md:hidden">
    <div class="text-center">
      <h1 class="text-xl mb-1">{{ tab === 'register' ? 'Sign Up' : 'Log In' }}</h1>
      <p class="text-md mb-4 leading-5">Sign up to enjoy the best selection of podcasts.</p>
    </div>

    <form v-show="tab === 'register'" class="max-w-lg m-auto">
      <app-register @change-tab="toggleTab"></app-register>
    </form>

    <form v-show="tab === 'login'" class="max-w-lg m-auto">
      <app-login @change-tab="toggleTab"></app-login>
    </form>
  </div>

  <!-- aabove md screen forms -->
  <div
    class="hidden md:block max-w-xl m-auto px-12 py-12 mt-[5%] rounded bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )]"
  >
    <div class="flex mb-8 shadow-md">
      <div
        class="grow px-4 py-2 rounded-l-md cursor-pointer"
        :class="tab === 'login' ? 'bg-white/[0.06]' : 'bg-white/[0.03]'"
        @click.prevent="tab = 'login'"
      >
        Login
      </div>
      <div
        class="grow px-4 py-2 rounded-r-md cursor-pointer"
        :class="tab === 'register' ? 'bg-white/[0.06]' : 'bg-white/[0.03]'"
        @click.prevent="tab = 'register'"
      >
        Sign Up
      </div>
    </div>

    <form v-show="tab === 'login'">
      <app-login @change-tab="toggleTab"></app-login>
    </form>

    <form v-show="tab === 'register'">
      <app-register @change-tab="toggleTab"></app-register>
    </form>
  </div>
</template>

<script>
import AppLogin from '../components/AppLogin.vue'
import AppRegister from '../components/AppRegister.vue'
export default {
  name: 'AuthView',
  components: {
    AppLogin,
    AppRegister
  },
  data() {
    return {
      tab: 'register'
    }
  },
  methods: {
    toggleTab(newValue) {
      this.tab = newValue
    }
  }
}
</script>
