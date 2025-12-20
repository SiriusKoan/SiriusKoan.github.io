<template>
  <div class="my-0 py-0 flex flex-col xl:flex-row gap-8 items-center">
    <div class="w-full xl:w-1/2 flex items-center justify-center">
      <h2 class="text-lg font-semibold">
        Experience
      </h2>
    </div>
    <div class="w-full xl:w-1/2 flex flex-col justify-center">
      <ListNode>
        Part-Time Assistant at
        <a
          href="https://www.nchc.org.tw/"
          target="_blank"
          class="underline"
        >NCHC</a>
      </ListNode>
      <ListNode>
        Teaching Assistant for
        <a
          href="https://site.nasa.cs.nycu.edu.tw/"
          target="_blank"
          class="underline"
        >NASA Course</a> at CS department, NYCU
      </ListNode>
      <ListNode>
        Teaching Assistant in Mail, System, and PC team at
        <a
          href="https://it.cs.nycu.edu.tw/"
          target="_blank"
          class="underline"
        >CS Computer Center</a>, NYCU
      </ListNode>
      <ListNode>
        Intern at
        <a
          href="https://anr.capital/"
          target="_blank"
          class="underline"
        >A&R Research Capital</a>
      </ListNode>
      <ListNode>
        Former club leader of
        <a
          href="http://cnmc.tw/"
          target="_blank"
          class="underline"
        >Campus Networking Management Club</a>
        at HSNU
      </ListNode>
    </div>
  </div>
</template>

<script>
import ListNode from "./ListNode.vue";
export default {
  name: "AboutExperienceSection",
  components: {
    ListNode,
  },
};
</script>

<style scoped></style>
