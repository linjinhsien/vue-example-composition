<template>
    <button @click="count++">count：{{count}}</button>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(0)

</script>
    
<style scoped>
    button {
        color: blue
    }
</style>