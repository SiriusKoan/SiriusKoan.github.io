<template>
  <div class="my-0 py-0 flex flex-col xl:flex-row gap-8 items-center">
    <div class="w-full xl:w-1/2 flex items-center justify-center">
      <h2 class="text-lg font-semibold text-center">
        Education
      </h2>
    </div>

    <div class="w-full xl:w-1/2 flex items-center">
      <EducationTimeline />
    </div>
  </div>
</template>

<script>
import EducationTimeline from "./EducationTimeline.vue";
export default {
  name: "AboutEducationSection",
  components: {
    EducationTimeline,
  },
};
</script>

<style scoped></style>
