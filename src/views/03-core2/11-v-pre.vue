<template>
    <h4>v-pre</h4>
    <div>message：{{message}}</div>
    <div v-pre>message v-pre：{{message}}</div>

    <h4>v-cloak</h4>
    <div>message：{{message}}</div>
    <div v-cloak>message v-cloak：{{message}}</div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref("this is message");

</script>

<style scoped>
    [v-cloak] {
        display:  none;
    }
</style>