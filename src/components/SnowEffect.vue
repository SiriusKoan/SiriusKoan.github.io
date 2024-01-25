<template>
    <div>
        <div class="absolute bg-white rounded-full -z-10 animate-[snow_linear_infinite] top-0 shadow-glow" v-for="i in 100"
            :key="i" ref="flake"></div>
    </div>
</template>

<script>
export default {
    name: 'SnowEffect',
    mounted() {
        this.snow();
    },
    methods: {
        snow() {
            for (let i = 0; i < this.$refs.flake.length; i++) {
                this.$refs.flake[i].style.left = Math.max(0.05, Math.min(Math.random(), 0.95)) * window.innerWidth + 'px';
                const elementWidth = Math.max(2, Math.random() * 6);
                this.$refs.flake[i].style.width = elementWidth + 'px';
                this.$refs.flake[i].style.height = elementWidth + 'px';
                this.$refs.flake[i].style.animationDuration = Math.max(15, Math.random() * 40) + 's';
                this.$refs.flake[i].style.animationDelay = Math.random() * 10 + 's';
            }
        }
    },
}
</script>