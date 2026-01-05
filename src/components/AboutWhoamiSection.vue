<template>
  <div class="flex flex-col items-center justify-center py-8">
    <div class="mb-8 w-1/2 md:w-1/4 lg:w-[10%]">
      <AvatarImage />
    </div>
    <div>
      <NameTypingEffect />
    </div>
  </div>
</template>

<script>
import AvatarImage from "./AvatarImage.vue";
import NameTypingEffect from "./NameTypingEffect.vue";
export default {
  name: "AboutWhoamiSection",
  components: {
    AvatarImage,
    NameTypingEffect,
  },
};
</script>

<style scoped></style>
