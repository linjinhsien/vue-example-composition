<template>
    <h3>v-model2</h3>
    <h3>元件v-model的內外資料雙向綁定：使用參數語法</h3>
    <div>
        <Model02Comp1 v-model:attr="message"></Model02Comp1>：{{message}}
    </div>
</template>
    
<script setup>
    import Model02Comp1 from '../../components/04-comp/04-v-model02-comp1.vue'
    import { ref } from 'vue'

    const message = ref("this is message")
</script>
    
<style scoped>
    
</style>