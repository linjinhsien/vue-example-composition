<template>
    <h3>props1</h3>
    <h3>元件外資料傳入元件內：使用靜態屬性</h3>
    <div>
        <Props01Comp1 custom-name1="custom data1" custom-name2="custom data2"></Props01Comp1>
    </div>
    <br><br>
    
    <h3>元件外資料傳入元件內：使用動態屬性</h3>
    <div>
        <Props01Comp1 :custom-name1="name1" :custom-name2="name2"></Props01Comp1>
        <div>Name1：<input type="text" v-model="name1"></div>
        <div>Name2：<input type="text" v-model="name2"></div>
    </div>
</template>
    
<script setup>
    import Props01Comp1 from '../../components/04-comp/02-props01-comp1.vue'
    import { ref } from "vue"

    const name1 = ref("this is name1")
    const name2 = ref("this is name2")


</script>
    
<style>
    
</style>
