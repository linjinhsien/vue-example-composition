<template>
    <h3>網頁模板</h3>

    <div>{{message}}</div>
    <div>Hi, {{name}}</div>
    <div>{{'Hi, ' + name}}</div>
    <div>{{number + 1}}</div>
    <div>{{ok?'yes':'no'}}</div>
    <div>{{console.log("this is console.log")}}</div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref("Hello world!");
    const name = ref("Samuel");
    const number = ref(2);
    const ok = ref(true);
</script>

<style scoped>

</style>