<template>
    <h3>v-model1</h3>
    <h3>元件v-model的內外資料雙向綁定</h3>
    <div>
        <Model01Comp1 v-model="data"></Model01Comp1>：{{data}}
    </div>
</template>

<script setup>
    import Model01Comp1 from '../../components/04-comp/04-v-model01-comp1.vue'
    import { ref } from 'vue'

    const data = ref("this is message")
</script>
    
<style>
    
</style>