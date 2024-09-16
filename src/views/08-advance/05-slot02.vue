<template>
    <h3>元件內資料傳出元件外：提供外部網頁模板使用</h3>
    <Slot02Comp1 v-slot="objOutside">
        <div>slot's att1：{{ objOutside.attr1 }}；attr2：{{ objOutside.attr2 }}</div>
    </Slot02Comp1>
</template>
    
<script setup>
    import Slot02Comp1 from "../../components/08-advance/05-slot02-comp1.vue";

</script>
    
<style scoped>
    
</style>
