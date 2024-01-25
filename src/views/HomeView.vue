<script>
import AvatarImage from '../components/AvatarImage.vue'
import SnowEffect from '../components/SnowEffect.vue'
export default {
    name: 'HomeView',
    components: {
        AvatarImage,
        SnowEffect,
    },
    computed: {
        winter() {
            const date = new Date();
            const month = date.getMonth();
            // 11, 12, 1, 2
            return month === 10 || month === 11 || month === 0 || month === 1;
        }
    },
}
</script>

<template>
  <main class="flex justify-center items-center p-0 my-0 mx-auto min-h-[85vh]">
    <SnowEffect v-if="winter" />
    <a href="/" class="w-[40vw] md:w-[15vw] hover:scale-110 transition-all">
      <AvatarImage />
    </a>
  </main>
</template>
