<template>
    <h3>Lab：下拉選單功能(無元件)</h3>
    <div>測試：<input type="number" v-model="total"></div>
    <br><br>
    <span>
        <span v-if="total===0">查無資料，</span>
        <span v-else>查到 {{total}} 筆資料，</span>
        <span>每頁顯示
            <select size="1" v-model="rows" @change="dochange">
                <option v-for="item in options" :key="item" :value="item">
                    {{item}}
                </option>
            </select>筆
        </span>
    </span>
</template>

<script setup>
    import { ref } from "vue"
    const total = ref(0)
    const rows = ref(5)
    const options = ref([5, 10, 25, 50, 100])
    function dochange() {
        console.log("rows", rows.value);
    }
</script>
    
<style>
    
</style>