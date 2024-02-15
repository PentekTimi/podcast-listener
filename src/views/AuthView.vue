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
import { useAuthStore } from '../stores/auth'
// we set the initial value of tab to authtab from the pinia authstore
// default value for authstore is 'register'. user can only get to auth page from main home page/ or through entering route
// tab value can then be updated based on user interaction and not from store (and not updating store value)
// it would run extra scripts with no impact on the correct visible components. could a user break the interface?
// authtab value is only needed and used when user first clicks on either login/register from the home page

export default {
  name: 'AuthView',
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  components: {
    AppLogin,
    AppRegister
  },
  data() {
    return {
      tab: this.authStore.authTab
    }
  },
  methods: {
    toggleTab(newValue) {
      this.tab = newValue
    }
  }
}
</script>
