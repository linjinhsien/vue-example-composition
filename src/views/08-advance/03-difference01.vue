<template>
    <h3>function vs computed vs watch 1</h3>
    
    <h3>使用方法</h3>
    <div>
        <input type="number" v-model="methodObj.num1" @input="doinput"> +
        <input type="number" v-model="methodObj.num2" @input="doinput">：{{methodObj.sum}}
    </div>

    <h3>使用computed</h3>
    <div>
        <input type="number" v-model="computedObj.num1"> +
        <input type="number" v-model="computedObj.num2">：{{sum2}}
    </div>

    <h3>使用watch</h3>
    <div>
        <input type="number" v-model="watchObj.num1"> +
        <input type="number" v-model="watchObj.num2">：{{watchObj.sum}}
    </div>
</template>
    
<script setup>
    import { reactive, computed, watch } from "vue";

    const methodObj = reactive({
        num1: 0,
        num2: 0,
        sum: 0,
    })
    function doinput() {
        methodObj.sum = methodObj.num1 + methodObj.num2
    }

    const computedObj = reactive({
        num1: 0,
        num2: 0,
    })
    const sum2 = computed(function() {
        return computedObj.num1 + computedObj.num2
    })

    const watchObj = reactive({
        num1: 0,
        num2: 0,
        sum: 0,
    })
    watch(() => watchObj.num1, function() {
        watchObj.sum = watchObj.num1 + watchObj.num2
    })
    watch(() => watchObj.num2, function() {
        watchObj.sum = watchObj.num1 + watchObj.num2
    })
</script>
    
<style scoped>
    
</style>
