<template>
    <h3>使用ref()與reactive()宣告變數01</h3>

    <div>
        ref：<input type="number" v-model="data1.count">：{{ data1.count }}
    </div>
    <div>
        reactive：<input type="number" v-model="data2.count">：{{ data2.count }}
    </div>
    <div>
        <button type="button" @click="doclick">click</button>
    </div>
    
</template>
    
<script setup>
    import { ref, reactive } from 'vue'
    const obj11 = { count: 10 }
    const obj12 = { count: 20 }

    const obj21 = { count: 100 }
    const obj22 = { count: 200 }

    const data1 = ref(obj11)
    const data2 = reactive(obj21)

    function doclick() {
        data1.value = obj12
        // data2 = reactive(obj22)
    }
</script>
    
<style>
    
</style>