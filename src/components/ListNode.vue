<template>
  <li class="p-0 ml-4 my-3">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "ListNode",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
