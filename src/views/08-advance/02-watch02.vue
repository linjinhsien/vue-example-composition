<template>
    <h3>watch 2</h3>
    
    <h3>immediate</h3>
    <div>(true) 攝氏<input type="number" v-model="celsius1">度 = 華式{{ fahrenheit1 }}度</div>
    <div>(false) 攝氏<input type="number" v-model="celsius2">度 = 華式{{ fahrenheit2 }}度</div>
    <br>

    <h3>flush</h3>
    <div>(pre) <button id="btn1" @click="count1++">count1：{{count1}}</button></div>
    <div>(post) <button id="btn2" @click="count2++">count2：{{count2}}</button></div>
    <br>
    
</template>

<script setup>
    import { ref, watch } from 'vue'

    const celsius1 = ref(0)
    const fahrenheit1 = ref(0)
    watch(celsius1, function(newValue, oldValue) {
            fahrenheit1.value = 9 / 5 * Number(newValue) + 32
        },
        { immediate: false }
    )

    const celsius2 = ref(0)
    const fahrenheit2 = ref(0)
    watch(celsius2, function(newValue, oldValue) {
            fahrenheit2.value = 9 / 5 * Number(newValue) + 32
        },
        { immediate: true }
    )

    const count1 = ref(0)
    watch(count1, function(newValue, oldValue) {
            let domValue = document.querySelector("#btn1").innerText
            console.log("data", newValue, "dom", domValue)
        },
        {flush: 'pre'}
    )

    const count2 = ref(0)
    watch(count2, function(newValue, oldValue) {
            let domValue = document.querySelector("#btn2").innerText
            console.log("data", newValue, "dom", domValue)
        },
        {flush: 'post'}
    )
</script>
    
<style>
    
</style>