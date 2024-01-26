<template>
  <div>
    <img :src="avatar" class="rounded-full shadow-glow" />
  </div>
</template>

<script>
export default {
  name: "AvatarImage",
  data() {
    return {
      avatar: "favicon.ico",
    };
  },
  mounted() {
    const date = new Date();
    if (date.getMonth() === 11) {
      this.avatar = "favicon-christmas.ico";
    }
  },
};
</script>
