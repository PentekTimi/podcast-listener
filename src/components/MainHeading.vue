<template>
  <!-- introduction heading -->
  <div class="flex flex-wrap items-center mb-6 md:mb-12 w-fit">
    <h1 class="heading-text">{{ $t('home.title1') }}</h1>
    <img src="../assets/landing-img01.jpg" class="heading-img" />
    <h1 class="heading-text">{{ $t('home.title2') }}</h1>
    <img src="../assets/landing-img02.jpg" class="heading-img" />
    <h1 class="heading-text">{{ $t('home.title3') }}</h1>
    <img src="../assets/landing-img03.png" class="heading-img" />
    <h1 class="heading-text">{{ $t('home.title4') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainHeading'
}
</script>
