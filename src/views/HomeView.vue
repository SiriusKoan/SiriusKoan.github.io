<script>
import AvatarImage from "../components/AvatarImage.vue";
import SnowEffect from "../components/SnowEffect.vue";
import NameTypingEffect from "../components/NameTypingEffect.vue";
export default {
  name: "HomeView",
  components: {
    AvatarImage,
    SnowEffect,
    NameTypingEffect,
  },
  computed: {
    winter() {
      const date = new Date();
      const month = date.getMonth();
      // 11, 12, 1, 2
      return month === 10 || month === 11 || month === 0 || month === 1;
    },
  },
};
</script>

<template>
  <main
    class="flex justify-center items-center p-0 my-0 mx-auto min-h-[85vh] flex-col"
  >
    <SnowEffect v-if="winter" />
    <a
      href="/"
      class="m-5 w-[40vw] md:w-[10vw] hover:scale-110 transition-all duration-500"
    >
      <AvatarImage />
    </a>
    <NameTypingEffect />
  </main>
</template>
