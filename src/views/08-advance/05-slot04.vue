<template>
    <h3>元件內資料傳出元件外：提供外部網頁模板使用(設定名稱)</h3>
    <Slot04Comp1>
        <template v-slot:name1="slot">
            <div>this is paragraph：{{slot.attr}}</div>
        </template>
        <template #name2="slot">
            <div>this is paragraph：{{slot.attr}}</div>
        </template>
    </Slot04Comp1>
</template>
    
<script setup>
    import Slot04Comp1 from "../../components/08-advance/05-slot04-comp1.vue";

</script>
    
<style scoped>
    
</style>
