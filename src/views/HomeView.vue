<script>
import AvatarImage from '../components/AvatarImage.vue'
export default {
    name: 'HomeView',
    components: {
        AvatarImage,
    },
}
</script>

<template>
  <main class="flex justify-center items-center p-0 my-0 mx-auto min-h-[85vh]">
    <a href="/" class="w-[40vw] md:w-[15vw] hover:scale-110 transition-all">
      <AvatarImage />
    </a>
  </main>
</template>
