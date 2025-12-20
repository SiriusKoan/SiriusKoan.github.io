<template>
  <div class="pr-0 xl:pr-5 flex flex-row">
    <a
      :href="href"
      target="_blank"
      class="flex justify-center items-center"
    >
      <FontAwesomeIcon
        :icon="icon"
        class="w-[35px] h-[35px] float-left"
      />
      <span class="p-4">{{ description }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "LinkContainer",
  props: {
    href: String,
    icon: [String, Array],
    description: String,
  },
};
</script>
