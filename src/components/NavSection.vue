<template>
  <!-- navbar -->
  <nav class="flex justify-between mb-12">
    <div>
      <router-link to="/"><h2 class="">PODCASTIN'</h2></router-link>
    </div>
    <div class="">
      <div class="relative sm:hidden w-6 cursor-pointer z-10" @click="showMenu">
        <img src="../assets/hamburger-menu.png" class="relative z-10" />

        <transition
          leave-active-class="transform transition duration-300 ease-custom"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <ul
            v-show="menu"
            class="absolute right-0 ml-[10%] mt-2 w-[150px] bg-gradient-to-b from-[#00000033] to-black"
          >
            <li class="relative p-2">
              <a href="#" @click.prevent="changeLocale">Switch to {{ currentLocale }}</a>
            </li>
            <li v-if="!userStore.userLoggedIn" class="relative p-2">
              <router-link @click="setAuthTab('login')" to="/auth">{{
                $t('navbar.login')
              }}</router-link>
            </li>
            <li v-if="!userStore.userLoggedIn" class="relative px-2 pb-4">
              <router-link @click="setAuthTab('register')" to="/auth">{{
                $t('navbar.register')
              }}</router-link>
            </li>
            <template v-else>
              <li class="relative px-2 pb-2">
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
              </li>
              <li class="relative px-2 pb-2">
                <router-link :to="{ name: 'manage' }">{{ $t('navbar.manage') }}</router-link>
              </li>
              <li class="relative px-2 pb-4">
                <router-link to="/" @click.prevent="userStore.signOut">{{
                  $t('navbar.logout')
                }}</router-link>
              </li>
            </template>
          </ul>
        </transition>
      </div>
    </div>

    <div class="hidden sm:block">
      <ul class="flex">
        <li class="pt-1 pb-1.5 mr-6 cursor-pointer">
          <a href="#" @click.prevent="changeLocale">Switch to {{ currentLocale }}</a>
        </li>
        <li v-if="!userStore.userLoggedIn" class="pt-1 pb-1.5 mr-6 cursor-pointer">
          <router-link @click="setAuthTab('register')" to="/auth" class="hover:text-shadow-sm">{{
            $t('navbar.register')
          }}</router-link>
        </li>
        <li
          v-if="!userStore.userLoggedIn"
          class="pt-1 pb-1.5 px-6 lg:px-8 border rounded-xl hover:bg-white hover:text-black cursor-pointer hover:shadow-[#dcdae152] hover:shadow-lg"
        >
          <router-link @click="setAuthTab('login')" to="/auth">{{
            $t('navbar.login')
          }}</router-link>
        </li>

        <template v-else>
          <li class="pt-1 pb-1.5 mr-6 cursor-pointer">
            <router-link :to="{ name: 'dashboard' }" class="hover:text-shadow-sm"
              >Dashboard</router-link
            >
          </li>
          <li class="pt-1 pb-1.5 mr-6 cursor-pointer">
            <router-link :to="{ name: 'manage' }" class="hover:text-shadow-sm">{{
              $t('navbar.manage')
            }}</router-link>
          </li>
          <li class="pt-1 pb-1.5 cursor-pointer">
            <router-link to="/" class="hover:text-shadow-sm" @click.prevent="userStore.signOut">{{
              $t('navbar.logout')
            }}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import useUserStore from '@/stores/user'
export default {
  name: 'NavSection',
  setup() {
    const authStore = useAuthStore()
    const userStore = useUserStore()
    return { authStore, userStore }
  },
  data() {
    return {
      menu: false
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale === 'es' ? 'English' : 'Spanish'
    }
  },
  methods: {
    showMenu() {
      this.menu = !this.menu
    },
    setAuthTab(arg) {
      this.authStore.authTab = arg
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es'
    }
  }
}
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
