<template>
    <nav class="px-5 py-7 select-none underline-offset-4 bg-[#5B8BAD] top-0">
        <RouterLink to="/" active-class="active" class="link">SiriusKoan</RouterLink>
        <RouterLink to="/about" active-class="active" class="link">About Me</RouterLink>
        <a href="https://blog.siriuskoan.one" target="_blank" class="link">Blog</a>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
nav .active {
    @apply decoration-solid underline decoration-2;
}

.link {
    @apply text-white decoration-solid ml-4 hover:underline decoration-2;
}
</style>
