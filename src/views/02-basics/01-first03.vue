<template>
    <h3>Composition API+&lt;script setup&gt;：{{ count }}</h3>
</template>
    
<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>
    
<style>
    
</style>