<template>
    <div>
        <slot attr1="this is attribute1" v-bind:attr2="messageInside"></slot>
        <div>Message (inside)：<input type="text" v-model="messageInside">：{{messageInside}}</div>
    </div>
</template>
    
<script setup>
    import { ref } from "vue"
    const messageInside = ref("inside")

</script>
    
<style scoped>

</style>
