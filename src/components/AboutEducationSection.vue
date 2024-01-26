<template>
  <div class="my-5">
    <h2>Education</h2>
    <ListNode>
      Major in Computer Science at National Yang Ming Chiao Tung University
      (NYCU)
    </ListNode>
    <ListNode>
      Graduated from The Affiliated Senior High School of National Taiwan Normal
      University (HSNU)
    </ListNode>
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
