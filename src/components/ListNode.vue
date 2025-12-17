<template>
  <li class="p-0 ml-4 my-3">
    <slot />
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
