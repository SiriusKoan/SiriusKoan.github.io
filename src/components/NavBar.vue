<template>
    <nav>
        <RouterLink to="/" active-class="active">SiriusKoan</RouterLink>
        <RouterLink to="/about" active-class="active">About Me</RouterLink>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
nav {
	padding: 30px 20px;
    user-select: none;
    text-underline-offset: 4px;
    background-color: #214e6e;
    top: 0;
}

nav a {
	color: white;
	text-decoration: none;
    font-size: 18px;
    font-family: 'Alata', sans-serif;
    margin-left: 10px;
}

nav a:hover {
	filter: opacity(50%);
}

nav .active {
	text-decoration: underline;
}
</style>
