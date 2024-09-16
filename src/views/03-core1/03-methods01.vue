<template>
    <h3>函數語法</h3>
    <button @click="doclick">count：{{ count }}</button>
</template>
    
<script setup>
import { ref } from 'vue'
const count = ref(0)
function doclick() {
    count.value++
}
</script>
    
<style>
    
</style>   