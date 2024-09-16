<template>
    <h3>Lab：下拉選單元件功能</h3>
    <div>測試：<input type="number" v-model="total"></div>
    <br><br>
    <Lab02Comp1 :options="options" :total="total" v-model="rows" @custom-change="dochange">
    </Lab02Comp1>
</template>

<script setup>
    import Lab02Comp1 from '../../components/05-impl/05-select02-comp1.vue'
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