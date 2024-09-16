<template>
    <h3>事件處理02</h3>
    <div class="square" @mouseover="domouseover" @mouseout="domouseout" @mousemove="mousemove"></div>
    <br>
    <div>message:{{message}}</div>
    <div>x:{{x}}</div>
    <div>y:{{y}}</div>
</template>

<script setup>
    import { ref } from 'vue';
    const message = ref("this is message");
    const x = ref(0);
    const y = ref(0);
    function domouseover() {
        message.value = "Mouse Over"
    }
    function domouseout() {
        message.value = "Mouse Out"
    }
    function mousemove(event) {
        x.value = event.pageX
        y.value = event.pageY
    }
</script>

<style scoped>
    .square {
        width: 200px;
        height: 200px;
        background: gray;
    }
</style>