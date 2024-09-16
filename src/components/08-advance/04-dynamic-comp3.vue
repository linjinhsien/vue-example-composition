<template>
    <h3>Comp3 (empty)</h3>
    <div>進入次數：{{activatedTimes}}</div>
    <div>離開次數：{{deactivatedTimes}}</div>
</template>
<script setup>
    import { ref, onActivated, onDeactivated } from "vue"
    const activatedTimes = ref(0)
    const deactivatedTimes = ref(0)

    onActivated(function () {
        activatedTimes.value++
    })
    onDeactivated(function () {
        deactivatedTimes.value++
    })
</script>
    
<style>
    
</style>