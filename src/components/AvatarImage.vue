<template>
    <div>
        <img :src="avatar" class="rounded-full">
    </div>
</template>

<script>
export default {
    name: 'AvatarImage',
    data() {
        return {
            avatar: 'favicon.ico',
        }
    },
}
</script>

