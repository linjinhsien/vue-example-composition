<template>
    <h3>v-text</h3>
    <div><input type="text" v-model="message"></div>
    <br>
    <h4>Template：{{message}}</h4>
    <h4>v-text：<span v-text="message"></span></h4>
    <h4>v-html：<span v-html="message"></span></h4>
    <h4>v-once：<span v-once>{{message}}</span></h4>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref("Hello <span>world</span>!");
</script>

<style scoped>

</style>