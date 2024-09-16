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

    const data1 = ref({ count: 0 })
    const data2 = reactive({ count: 0 })

    function doclick() {
        data1.value.count++;
        data2.count++;
    }
</script>
    
<style>
    
</style>