<template>
    <h3>Component One</h3>
    <button @click="doclick">Count: {{ count }}</button>
</template>
    
<script setup>
import { ref } from 'vue'

const count = ref(0)
function doclick() {
    count.value++
}
</script>
    
<style scoped>
    h3 {
        color: blue
    }
</style>
