<template>
  <div class="flex flex-row">
    <a :href="href" target="_blank" class="w-14 inline-flex items-center">
      <img :src="imgSrc" :alt="imgAlt" class="w-[35px] h-[35px] float-left" />
      <span class="p-4">{{ description }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "LinkContainer",
  props: {
    href: String,
    imgSrc: String,
    imgAlt: String,
    description: String,
  },
};
</script>
