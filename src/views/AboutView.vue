<template>
  <main class="m-0 p-8 min-h-[85vh]">
    <div>
      <AboutWhoamiSection />
      <SectionSeparator />
      <AboutEducationSection />
      <SectionSeparator />
      <AboutExperienceSection />
      <SectionSeparator />
      <AboutContactSection />
    </div>
  </main>
</template>

<script>
import AboutWhoamiSection from "../components/AboutWhoamiSection.vue";
import AboutEducationSection from "../components/AboutEducationSection.vue";
import AboutExperienceSection from "../components/AboutExperienceSection.vue";
import AboutContactSection from "../components/AboutContactSection.vue";
import SectionSeparator from "../components/SectionSeparator.vue";
export default {
  name: "AboutView",
  components: {
    AboutWhoamiSection,
    AboutEducationSection,
    AboutExperienceSection,
    AboutContactSection,
    SectionSeparator,
  },
  mounted() {
    document.body.style.backgroundColor = '#030c1c';
  },
};
</script>
