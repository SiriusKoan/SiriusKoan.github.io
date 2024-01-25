<template>
    <footer>
        <p id="copyright">© 2022 <a href="https://github.com/SiriusKoan" target="_blank">SiriusKoan</a></p>
    </footer>
</template>

<script>
export default {
    name: "Copyright",
};
</script>

<style scoped>
footer {
    margin: 0;
}

#copyright {
    padding-top: 50px;
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    transition: opacity 1s ease-in;
    font-family: 'Alata', sans-serif;
    font-size: 15px;
    user-select: none;
    color: aliceblue;
}

#copyright a {
    color: aliceblue;
    text-decoration: none;
}

#copyright a:hover {
    text-decoration: none;
}
</style>
