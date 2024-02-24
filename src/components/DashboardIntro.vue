<template>
  <section class="mb-8 pt-5 pb-20 text-white text-center relative">
    <div class="absolute inset-0 w-full h-full bg-contain introduction-bg"></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">{{ $t('dashboard.listen') }}</h1>
        <p class="w-full md:w-[80%] mx-auto">
          {{ $t('dashboard.dashboardIntro') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashboardIntro'
}
</script>
