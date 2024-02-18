<template>
  <div>
    <div
      v-if="reqistration_show_alert"
      :class="registration_alert_variant"
      class="text-white text-center p-4 rounded mb-4"
    >
      {{ registration_alert_msg }}
    </div>
    <vee-form :validation-schema="schema" @submit="register">
      <!-- name -->
      <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          name="name"
          type="text"
          placeholder="Enter your name"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-red-600" name="name" />
      </div>
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          name="email"
          type="email"
          placeholder="Enter your email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <input
            type="password"
            placeholder="Create password"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            v-bind="field"
          />
          <div class="text-red-600" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>
      <!-- confirm password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field
          name="confirm_password"
          type="password"
          placeholder="Confirm password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-red-600" name="confirm_password" />
      </div>
      <!-- temrs and conditions -->
      <div class="mb-3 pl-6">
        <vee-field
          name="tos"
          value="1"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <label class="inline-block">Accept terms of service</label>
        <ErrorMessage class="text-red-600 block" name="tos" />
      </div>
      <!-- link to login -->
      <div class="text-sm">
        <p class="inline-block mr-1">Are you a member?</p>
        <span
          class="underline font-bold cursor-pointer"
          @click.prevent="$emit('changeTab', 'login')"
          >Log In Now.</span
        >
      </div>
      <!-- submit btn -->
      <button
        type="submit"
        class="block bg-[length:400px_200px] mt-6 w-52 bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] text-white py-1.5 px-3 rounded enabled:hover:bg-[right_center] enabled:transition-all enabled:duration-500"
        :disabled="registration_in_submission"
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
  name: 'AppRegister',
  data() {
    return {
      schema: {
        name: 'required|min:2|max:100|alpha_spaces',
        email: 'required|email|min:3|max:100',
        password: 'required|min:7|max:50|excluded:password,qwerty',
        confirm_password: 'passwords_mismatch:@password',
        tos: 'tos'
      },
      registration_in_submission: false,
      reqistration_show_alert: false,
      registration_alert_msg: 'Your account is being created.',
      registration_alert_variant: 'bg-blue-500'
    }
  },
  methods: {
    ...mapActions(useUserStore, {
      createUser: 'register'
    }),
    async register(values) {
      this.reqistration_show_alert = true
      this.registration_in_submission = true
      this.registration_alert_msg = 'Your account is being created.'
      this.registration_alert_variant = 'bg-blue-500'

      try {
        await this.createUser(values)
      } catch (error) {
        this.registration_in_submission = false
        this.registration_alert_variant = 'bg-red-500'
        this.registration_alert_msg = 'An unexpected error occured. Please try again later.'
        return
      }

      this.registration_alert_msg = 'Success! Your account has been created.'
      this.registration_alert_variant = 'bg-green-500'
      window.location.href = '/'
    }
  }
}
</script>
