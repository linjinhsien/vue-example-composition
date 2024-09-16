<template>
    <h3>watch 1</h3>
    
    <div>Message：<input type="text" v-model="message">：{{message}}</div>
    <br>

    <div><input type="number" v-model="num1"> + <input type="number" v-model="num2"> = {{sum}}</div>
    <br>

    <div>攝氏<input type="number" v-model="celsius">度 = 華式{{ fahrenheit }}度</div>
    <br>
</template>
    
<script setup>
    import { ref, watch } from "vue";

    const message = ref(null)
    watch(message, function(newValue, oldValue) {
        console.log("message", "new", newValue, "old", oldValue);
    })

    const sum = ref(0)
    const num1 = ref(0)
    const num2 = ref(0)
    watch(num1, function (newValue, oldValue) {
        sum.value = newValue + num2.value
    })
    watch(num2, function (newValue, oldValue) {
        sum.value = num1.value + newValue
    })

    const celsius = ref(0)
    const fahrenheit = ref(0)
    watch(celsius, function (newValue, oldValue) {
        fahrenheit.value = 9 / 5 * Number(newValue) + 32
    })

</script>
    
<style scoped>
    
</style>
