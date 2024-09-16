<template>
    <div>Child public：{{publicCount}}，private：{{privateCount}}</div>
    <button @click="publicMethod">public</button>｜
    <button @click="privateMethod">private</button>
</template>
    
<script setup>
    import { ref } from "vue"
    const publicCount = ref(0)
    const privateCount = ref(0)

    function publicMethod() {
        publicCount.value++;
    }
    function privateMethod() {
        privateCount.value++;
    }

    defineExpose({
        publicCount, 
        publicMethod,
    })
</script>

<style scoped>
    
</style>