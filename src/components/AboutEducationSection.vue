<template>
  <div class="my-0 py-0 flex flex-col xl:flex-row gap-8 items-center">
    <div class="w-full xl:w-1/2 flex items-center justify-center">
      <h2 class="text-lg font-semibold">
        Education
      </h2>
    </div>
    <div class="w-full xl:w-1/2 flex flex-col justify-center">
      <ListNode>
        Master's Student in Computer Science at National Yang Ming Chiao Tung University
        (NYCU)
      </ListNode>
      <ListNode>
        Major in Computer Science at National Yang Ming Chiao Tung University
        (NYCU)
      </ListNode>
      <ListNode>
        Graduated from The Affiliated Senior High School of National Taiwan Normal
        University (HSNU)
      </ListNode>
    </div>
  </div>
</template>

<script>
import ListNode from "./ListNode.vue";
export default {
  name: "AboutEducationSection",
  components: {
    ListNode,
  },
};
</script>

<style scoped></style>
