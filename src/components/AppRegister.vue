<template>
  <div>
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password"
        placeholder="Create password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- confirm password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
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
    <div class="text-sm">
      <p class="inline-block mr-1">Are you a member?</p>
      <span class="underline font-bold cursor-pointer" @click.prevent="$emit('changeTab', 'login')"
        >Log In Now.</span
      >
    </div>
    <!-- submit btn -->
    <button
      type="submit"
      class="block bg-[length:400px_200px] mt-6 w-52 bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] text-white py-1.5 px-3 rounded transition-all duration-500 hover:bg-[right_center]"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppRegister'
}
</script>
