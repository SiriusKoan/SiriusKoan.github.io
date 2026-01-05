<template>
  <div class="my-0 py-0 flex flex-col xl:flex-row gap-8 items-center">
    <div class="w-full xl:w-1/2 flex flex-col items-center justify-center">
      <h2 class="text-2xl font-semibold text-center">
        Contact Me
      </h2>
    </div>
    <div class="w-full xl:w-1/2 xl:flex-row xl:justify-start flex flex-col items-center justify-center">
      <LinkContainer
        href="https://github.com/SiriusKoan"
        icon="fab fa-github"
        description="GitHub"
      />
      <LinkContainer
        href="https://telegram.me/SiriusKoan"
        icon="fab fa-telegram"
        description="Telegram"
      />
      <LinkContainer
        href="https://linkedin.com/in/pei-hsun-kuan"
        icon="fab fa-linkedin-in"
        description="LinkedIn"
      />
    </div>
  </div>
</template>

<script>
import LinkContainer from "./LinkContainer.vue";
export default {
  name: "AboutContactSection",
  components: {
    LinkContainer,
  },
};
</script>

<style scoped></style>
