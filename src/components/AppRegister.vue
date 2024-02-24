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
        <label class="inline-block mb-2">{{ $t('auth.name') }}</label>
        <vee-field
          name="name"
          type="text"
          placeholder="Enter your name"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-[#CF6679]" name="name" />
      </div>
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">{{ $t('auth.email') }}</label>
        <vee-field
          name="email"
          type="email"
          placeholder="Enter your email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-[#CF6679]" name="email" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">{{ $t('auth.password') }}</label>
        <vee-field name="password" :bails="false" v-slot="{ field, errors }">
          <input
            type="password"
            placeholder="Create password"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            v-bind="field"
          />
          <div class="text-[#CF6679]" v-for="error in errors" :key="error">
            {{ error }}
          </div>
        </vee-field>
      </div>
      <!-- confirm password -->
      <div class="mb-3">
        <label class="inline-block mb-2">{{ $t('auth.confirmPassword') }}</label>
        <vee-field
          name="confirm_password"
          type="password"
          placeholder="Confirm password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <ErrorMessage class="text-[#CF6679]" name="confirm_password" />
      </div>
      <!-- temrs and conditions -->
      <div class="mb-3 pl-6">
        <vee-field
          name="tos"
          value="1"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <i18n-t class="inline-block" keypath="register.accept" tag="label"
          ><a href="#">{{ $t('register.tos') }}</a></i18n-t
        >
        <ErrorMessage class="text-[[#CF6679]] block" name="tos" />
      </div>
      <!-- link to login -->
      <div class="text-sm">
        <p class="inline-block mr-1">{{ $t('auth.member') }}</p>
        <span
          class="underline font-bold cursor-pointer"
          @click.prevent="$emit('changeTab', 'login')"
          >{{ $t('auth.callToLogin') }}</span
        >
      </div>
      <!-- submit btn -->
      <button
        type="submit"
        class="block bg-[length:400px_200px] mt-6 w-52 bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] text-white py-1.5 px-3 rounded enabled:hover:bg-[right_center] enabled:transition-all enabled:duration-500"
        :disabled="registration_in_submission"
      >
        {{ $t('auth.cta') }}
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
      registration_alert_variant: 'bg-[#BB86FC]'
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
      this.registration_alert_variant = 'bg-[#BB86FC]'

      try {
        await this.createUser(values)
      } catch (error) {
        this.registration_in_submission = false
        this.registration_alert_variant = 'bg-[#CF6679]'
        this.registration_alert_msg = 'An unexpected error occured. Please try again later.'
        return
      }

      this.registration_alert_msg = 'Success! Your account has been created.'
      this.registration_alert_variant = 'bg-[#4EE4A2]'
      window.location.href = '/'
    }
  }
}
</script>
