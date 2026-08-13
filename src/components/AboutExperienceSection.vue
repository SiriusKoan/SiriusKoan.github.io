<template>
  <div class="my-0 py-0 flex flex-col xl:flex-row gap-8 items-center">
    <div class="w-full xl:w-1/2 flex items-center justify-center">
      <h2 class="text-2xl font-semibold text-center">
        Experience
      </h2>
    </div>
    <div class="w-full xl:w-1/2 flex items-center">
      <div class="w-full max-w-3xl ml-0 px-0">
        <Timeline
          :items="items"
          line-class="bg-[#c6e5ff]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
export default {
  name: "AboutExperienceSection",
  components: {
    Timeline,
  },
  data() {
    return {
      items: [
        {
          id: "tsmc-it",
          title: 'Intern at <a href="https://www.tsmc.com/" target="_blank" class="underline">TSMC</a> IT',
          date: "2026/07 - 2026/08",
          description: '',
          image: "/tsmc.png",
          imageBgClass: "bg-white",
        },
        {
          id: "nchc",
          title: 'Part-Time Assistant at <a href="https://www.nchc.org.tw/" target="_blank" class="underline">NCHC</a>',
          date: "2025/01 - Present",
          description: '',
          image: "/nchc.png",
          imageBgClass: "bg-white",
        },
        {
          id: "nasa-ta",
          title: 'Teaching Assistant for <a href="https://site.nasa.cs.nycu.edu.tw/" target="_blank" class="underline">NASA Course</a> at CS Department, NYCU',
          date: "2025/01 - Present",
          description: '',
          image: "/nycu.png",
          imageBgClass: "bg-white",
        },
        {
          id: "anr-intern",
          title: 'Intern at <a href="https://anr.capital/" target="_blank" class="underline">A&R Research Capital</a>',
          date: "2023/10 - 2024/02",
          description: '',
          image: "/anr.png",
          imageBgClass: "bg-white",
        },
        {
          id: "cs-it-ta",
          title: 'Part-Time Assistant at <a href="https://it.cs.nycu.edu.tw/" target="_blank" class="underline">CS Information Technology Center</a>, NYCU',
          date: "2021/06 - Present",
          description: 'Part-Time Assistant in Mail, System, HPC, and PC team at CSIT',
          image: "/csit.png",
          imageBgClass: "bg-white",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
