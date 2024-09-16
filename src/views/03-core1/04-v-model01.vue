<template>
    <h3>v-model基礎功能</h3>
    <div><input type="text" v-model="message"></div>
    <div>{{message}}</div>
    <br>
    <div><input type="checkbox" v-model="checked"></div>
    <div>{{checked}}</div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref("this is a v-model demo");
    const checked = ref(false);
</script>

<style>

</style>