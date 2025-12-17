<template>
  <nav class="px-3 py-6 select-none underline-offset-4 top-0 flex items-center">
    <RouterLink
      to="/"
      active-class="active"
      class="link inline-block w-8 mx-2"
    >
      <AvatarImage />
    </RouterLink>
    <RouterLink
      to="/about"
      active-class="active"
      class="link"
    >
      About Me
    </RouterLink>
    <a
      href="https://blog.siriuskoan.one"
      target="_blank"
      class="link"
    >Blog</a>
  </nav>
</template>

<script>
import AvatarImage from "./AvatarImage.vue";

export default {
  name: "NavBar",
  components: {
    AvatarImage,
  },
};
</script>

<style scoped>
nav .active {
  @apply decoration-solid underline decoration-2;
}

.link {
  @apply text-white decoration-solid ml-4 hover:underline decoration-2;
}
</style>
