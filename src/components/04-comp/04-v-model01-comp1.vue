<template>
    <input type="text" :value="modelValue" @input="emits('update:modelValue', $event.target.value)">
</template>
<script setup>
    const props = defineProps(["modelValue"])
    const emits = defineEmits(["update:modelValue"])

</script>

<style scoped>
    
</style>