<template>
  <main class="m-0 p-8 min-h-[85vh]">
    <h1>SiriusKoan</h1>
    <div>
      <AboutWhoamiSection />
      <AboutEducationSection />
      <AboutExperienceSection />
      <AboutContactSection />
    </div>
  </main>
</template>

<script>
import AboutWhoamiSection from "../components/AboutWhoamiSection.vue";
import AboutEducationSection from "../components/AboutEducationSection.vue";
import AboutExperienceSection from "../components/AboutExperienceSection.vue";
import AboutContactSection from "../components/AboutContactSection.vue";
export default {
  name: "AboutView",
  components: {
    AboutWhoamiSection,
    AboutEducationSection,
    AboutExperienceSection,
    AboutContactSection,
  },
};
</script>
