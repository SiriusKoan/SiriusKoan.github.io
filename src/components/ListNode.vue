<template>
  <li class="p-0 my-3 list-inside">
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
