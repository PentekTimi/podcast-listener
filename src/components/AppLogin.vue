<template>
  <div>
    <div
      v-if="login_show_alert"
      :class="login_alert_variant"
      class="text-white text-center p-4 rounded mb-4"
    >
      {{ login_alert_msg }}
    </div>
    <vee-form :validation-schema="loginSchema" @submit="login">
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          name="email"
          type="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          name="password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
        />
      </div>
      <div class="text-sm">
        <p class="inline-block mr-1">Not a member yet?</p>
        <span
          class="underline font-bold cursor-pointer"
          @click.prevent="$emit('changeTab', 'register')"
          >Sign Up Now.</span
        >
      </div>
      <!-- submit btn -->
      <button
        type="submit"
        class="block bg-[length:400px_200px] mt-6 w-52 bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] text-white py-1.5 px-3 rounded enabled:transition-all enabled:duration-500 enabled:hover:bg-[right_center]"
        :disabled="login_in_submission"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'AppLogin',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_msg: 'Please wait, we are logging you in.',
      login_alert_variant: 'bg-blue-500'
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),
    async login(values) {
      this.login_in_submission = true
      this.login_show_alert = true
      this.login_alert_msg = 'Please wait, we are logging you in.'
      this.login_alert_variant = 'bg-blue-500'

      try {
        await this.authenticate(values)
      } catch (error) {
        this.login_in_submission = false
        this.login_alert_variant = 'bg-red-500'
        this.login_alert_msg = 'Invalid login details.'
        return
      }

      this.login_alert_msg = 'Success! You are now logged in.'
      this.login_alert_variant = 'bg-green-500'
      window.location.href = '/'
    }
  }
}
</script>
