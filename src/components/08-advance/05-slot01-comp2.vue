<template>
    <div>
        <slot></slot>
        <div>Message (inside)：<input type="text" v-model="messageInside">：{{messageInside}}</div>
    </div>
</template>
    
<script setup>
    import { ref } from "vue"
    const messageInside = ref("inside")
    
</script>
    
<style scoped>

</style>
