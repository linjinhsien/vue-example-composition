<template>
    <h3>Component Two</h3>
    <div><input type="text" v-model="msg">：{{ msg }}</div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref("this is a demo")

</script>
    
<style scoped>
    h3 {
        color: red
    }
</style>
