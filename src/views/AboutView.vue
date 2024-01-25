<template>
    <main>
        <h1>SiriusKoan</h1>
        <div class="info-container">
            <AboutWhoamiSection />
            <AboutEducationSection />
            <AboutExperienceSection />
            <AboutContactSection />
        </div>
    </main>
</template>

<style>
main {
    background-color: #214e6e;
    min-height: 100vh;
    margin: 0;
    padding: 40px 50px;
}

h1 {
    color: white;
    margin: 0;
    font-family: 'Alata', sans-serif;
}

.info-container {
    margin-left: 10px;
    font-family: 'Alata', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    animation-name: In;
    animation-duration: 1s;
    animation-timing-function: ease-out;
}

@keyframes In {
    from {
        opacity: 0;
        transform: translate(0px, 150px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

@media only screen and (max-width: 600px) {
    main {
        margin-left: 20px;
    }
}
</style>

<script>
import AboutWhoamiSection from "../components/AboutWhoamiSection.vue"
import AboutEducationSection from "../components/AboutEducationSection.vue"
import AboutExperienceSection from "../components/AboutExperienceSection.vue"
import AboutContactSection from "../components/AboutContactSection.vue"
export default {
    name: "AboutView",
    components: {
        AboutWhoamiSection,
        AboutEducationSection,
        AboutExperienceSection,
        AboutContactSection,
    }
}
</script>
