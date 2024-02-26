<template>
  <div>
    <!-- back to home -->
    <router-link to="/" class=""
      ><span class="relative top-0.5 mr-1.5 inline-block rotate-[-90deg]">
        <svg
          class="w-3 lg:w-[15px]"
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
        </svg> </span
      >{{ $t('auth.navigateBack') }}</router-link
    >
    <!-- small screen forms -->
    <div class="md:hidden">
      <div class="text-center">
        <h1 class="text-xl mb-1 mt-4">
          {{ tab === 'register' ? $t('navbar.register') : $t('navbar.login') }}
        </h1>
      </div>

      <!-- test accounts info -->
      <div class="p-4 my-4 bg-white/[0.05] backdrop-blur rounded max-w-lg m-auto">
        <p class="font-bold text-md mb-4">Test accounts for login</p>
        <div class="mb-4">
          <p class="text-sm">Email: janedoe@email.com</p>
          <p class="text-sm">Password: 1234567</p>
        </div>

        <p class="text-sm">Email: michaeldavids@email.com</p>
        <p class="text-sm">Password: 1234567</p>
      </div>

      <div v-show="tab === 'register'" class="max-w-lg m-auto">
        <app-register @change-tab="toggleTab"></app-register>
      </div>

      <div v-show="tab === 'login'" class="max-w-lg m-auto">
        <app-login @change-tab="toggleTab"></app-login>
      </div>
    </div>

    <!-- aabove md screen forms -->
    <div
      class="hidden md:block max-w-xl m-auto px-12 py-12 mt-4 rounded bg-white/[0.03] backdrop-blur shadow-[0_8px_32px_0px_rgba(31,38,135,0.37 )]"
    >
      <div class="flex mb-8 shadow-md">
        <div
          class="grow px-4 py-2 rounded-l-md cursor-pointer"
          :class="tab === 'login' ? 'bg-white/[0.06]' : 'bg-white/[0.03]'"
          @click.prevent="tab = 'login'"
        >
          {{ $t('navbar.login') }}
        </div>

        <div
          class="grow px-4 py-2 rounded-r-md cursor-pointer"
          :class="tab === 'register' ? 'bg-white/[0.06]' : 'bg-white/[0.03]'"
          @click.prevent="tab = 'register'"
        >
          {{ $t('navbar.register') }}
        </div>
      </div>

      <!-- test accounts info -->
      <div class="p-4 mb-2 bg-white/[0.05] backdrop-blur rounded">
        <p class="font-bold text-md mb-4">Test accounts for login</p>
        <div class="flex">
          <div class="mr-14">
            <p class="text-sm">Email: janedoe@email.com</p>
            <p class="text-sm">Password: 1234567</p>
          </div>
          <div>
            <p class="text-sm">Email: michaeldavids@email.com</p>
            <p class="text-sm">Password: 1234567</p>
          </div>
        </div>
      </div>

      <div v-if="tab === 'login'">
        <app-login @change-tab="toggleTab"></app-login>
      </div>

      <div v-if="tab === 'register'">
        <app-register @change-tab="toggleTab"></app-register>
      </div>
    </div>
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
