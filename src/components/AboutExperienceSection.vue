<template>
    <div class="my-5">
        <h2>Experience</h2>
        <ListNode>
            Teaching Assistant in Mail team and System team at <a href="https://it.cs.nycu.edu.tw/"
                                                                    target="_blank">CS Computer Center</a>, NYCU
        </ListNode>
        <ListNode>
            Former club leader of <a href="http://cnmc.tw/" target="_blank">Campus Networking Management Club</a> at HSNU
        </ListNode>
    </div>
</template>

<script>
import ListNode from "./ListNode.vue";
export default {
    name: "AboutExperienceSection",
    components: {
        ListNode,
    },
};
</script>

<style scoped>
</style>
