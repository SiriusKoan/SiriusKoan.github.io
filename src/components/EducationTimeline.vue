<template>
  <div class="w-full max-w-3xl ml-0 px-0">
    <Timeline
      :items="items"
      line-class="bg-white"
    />
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";

export default {
  name: "EducationTimeline",
  components: {
    Timeline,
  },
  data() {
    return {
      items: [
        {
          id: "nycu-msc",
          title: "NYCU — M.Sc. Computer Science",
          date: "2025/09 - Present",
          description:
            "Master's Student in Computer Science at National Yang Ming Chiao Tung University (NYCU)",
          image: "/nycu.png",
          imageBgClass: "bg-white",
          colorClass: "bg-sky-600",
        },
        {
          id: "nycu-bsc",
          title: "NYCU — B.Sc. Computer Science",
          date: "2021/09 - 2025/07",
          description:
            "Major in Computer Science at National Yang Ming Chiao Tung University (NYCU)",
          image: "/nycu.png",
          imageBgClass: "bg-white",
          colorClass: "bg-emerald-600",
        },
        {
          id: "hsnu",
          title: "HSNU - High School",
          date: "2018/09 - 2021/07",
          description:
            "The Affiliated Senior High School of National Taiwan Normal University (HSNU)",
          image: "/hsnu.png",
          imageBgClass: "bg-white",
          colorClass: "bg-indigo-600",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
