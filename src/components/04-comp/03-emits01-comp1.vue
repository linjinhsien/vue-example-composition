<template>
    <button type="button" @click="doclick">發送</button>
</template>
    
<script setup>
    const emits = defineEmits(["customEvent"])
    function doclick() {
        emits("customEvent", "參數1", new Date())
    }
</script>
    
<style>
    
</style>