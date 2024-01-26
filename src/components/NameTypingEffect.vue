<template>
  <div class="text-3xl font-cursive">
    {{ typedName }}
  </div>
</template>

<script>
export default {
  name: "NameTypingEffect",
  data() {
    return {
      name: "SiriusKoan",
      typedName: "",
    };
  },
  mounted() {
    this.typeName();
  },
  methods: {
    typeName() {
      const nameArray = this.name.split("");
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        this.typedName += nameArray[currentIndex];
        currentIndex++;

        if (currentIndex === nameArray.length) {
          clearInterval(typingInterval);
        }
      }, 100);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap");
</style>
