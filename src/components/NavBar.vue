<template>
    <nav class="px-5 py-7 select-none underline-offset-4 bg-[#5B8BAD] top-0">
        <RouterLink to="/" active-class="active" class="text-white decoration-solid ml-4 hover:opacity-70">SiriusKoan</RouterLink>
        <RouterLink to="/about" active-class="active" class="text-white decoration-solid ml-4 hover:opacity-70">About Me</RouterLink>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
nav .active {
	text-decoration: underline;
}
</style>
