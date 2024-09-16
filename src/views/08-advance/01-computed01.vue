<template>
    <h3>computed 1</h3>
    <div><input type="text" v-model="message">：{{reversedMessage}}</div>
    <br>

    <div><input type="number" v-model="num1"> + <input type="number" v-model="num2"> = {{sum}}</div>
    <br>

    <div>攝氏<input type="number" v-model="celsius">度 = 華式{{ fahrenheit }}度</div>
    <br>
</template>
    
<script setup>
    import { ref, computed } from "vue";
    const message = ref("")
    const reversedMessage = computed(function() {
        return message.value.split("").reverse().join()
    })

    const num1 = ref(0)
    const num2 = ref(0)
    const sum = computed(function() {
        return num1.value + num2.value
    })

    const celsius = ref(0)
    const fahrenheit = computed(function() {
        return celsius.value * 9 / 5 + 32;
    })
</script>
    
<style scoped>
    
</style>
