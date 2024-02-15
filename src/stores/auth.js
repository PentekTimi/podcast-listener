import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authTab: 'register'
  }),
  actions: {
    setTab(value) {
      this.authTab = value
    }
  }
})
