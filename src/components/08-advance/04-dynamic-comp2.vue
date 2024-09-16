<template>
    <h3>Comp2 (empty)</h3>
    <button @click="count++">count：{{count}}</button>

</template>

<script setup>
    import {ref} from 'vue'
    const count = ref(0)
    
</script>
