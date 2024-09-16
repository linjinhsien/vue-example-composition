<template>
    <h3>使用Datetimepicker</h3>
    <FlatPickr v-model="date"/>
</template>
    
<script setup>
    import FlatPickr from 'vue-flatpickr-component'
    import {ref} from 'vue'
    const date = ref(null)
    
</script>
    
<style>
    
</style>
