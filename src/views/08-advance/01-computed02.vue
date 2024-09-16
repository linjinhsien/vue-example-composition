<template>
    <h3>computed 2</h3>
    <button type="button" @click="doclick">click</button>
</template>
    
<script setup>
    import { computed } from "vue";
    const now = computed(function() {
        return Date.now()
    })

    function doclick() {
        console.log("Date.now()", Date.now(), "now", now.value)
    }
</script>
    
<style scoped>
    
</style>
