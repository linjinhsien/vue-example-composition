<template>
    <input type="text" :value="attr" @input="emits('update:attr', $event.target.value)">        
</template>

<script setup>
    const props = defineProps(["attr"])
    const emits = defineEmits(["update:attr"])

</script>
    
<style scoped>
    
</style>