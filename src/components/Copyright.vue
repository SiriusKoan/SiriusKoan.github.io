<template>
  <footer class="m-0">
    <p class="p-3 w-full text-center">
      © {{ currentYear }}
      <a
        href="https://github.com/SiriusKoan"
        target="_blank"
        class="decoration-none"
      >SiriusKoan</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Copyright",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
