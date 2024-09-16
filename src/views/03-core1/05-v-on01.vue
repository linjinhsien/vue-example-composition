<template>
    <h3>事件處理01</h3>
    <button v-on:click="count1++">button1：{{count1}}</button>｜
    <button @click="doclick2">button2：{{count2}}</button>｜
    <button @click="doclick3($event)">button3：{{count3}}</button>｜
    <br><br>
    <div>
        <input type="text" v-model="message">
        <button @click="doclick4(message, $event)">button4</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const count1 = ref(0);
    const count2 = ref(0);
    const count3 = ref(0);
    const message = ref("");

    function doclick2(event) {
        console.log("doclick2", event)
        count2.value++
    }
    function doclick3(event) {
        console.log("doclick3", event)
        count3.value++
    }
    function doclick4(param, event) {
        console.log("doclick4", param, event)
    }
</script>

<style scoped>

</style>