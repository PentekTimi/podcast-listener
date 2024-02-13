<template>
  <div>
    <h1>Sign Up/ Login</h1>
    <p>Sign up to enjoy the best selection of podcasts.</p>
  </div>

  <div class="md:hidden">
    <form v-show="tab === 'register'">
      <!-- Name -->
      <div class="mb-3">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
      </div>
      <!-- Email -->
      <div class="mb-3">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
      </div>
      <!-- confirm password -->
      <div class="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
      </div>
      <!-- temrs and conditions -->
      <div class="mb-3 pl-6">
        <input type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
        <label class="inline-block">Accept terms of service</label>
      </div>
      <!-- submit btn -->
      <button
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      >
        Submit
      </button>
    </form>

    <form v-show="tab === 'login'">
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <input
          type="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
        />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
        />
      </div>
      <!-- submit btn -->
      <button
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthView',
  data() {
    return {
      tab: 'register'
    }
  }
}
</script>
