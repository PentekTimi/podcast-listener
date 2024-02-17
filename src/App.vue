<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'

export default {
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
