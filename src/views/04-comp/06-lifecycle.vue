<template>
    <h3>Life Cycle</h3>
</template>
    
<script setup>
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

    onBeforeMount(function() {
        console.log("onBeforeMount=", new Date());
    });
    onMounted(function() {
        console.log("onMounted=", new Date());
    });
    onBeforeUpdate(function() {
        console.log("onBeforeUpdate=", new Date());
    });
    onUpdated(function() {
        console.log("onUpdated=", new Date());
    });
    onBeforeUnmount(function() {
        console.log("onBeforeUnmount=", new Date());
    });
    onUnmounted(function() {
        console.log("onUnmounted=", new Date());
    });

    console.log("setup()=", new Date());
</script>
    
<style>
    
</style>