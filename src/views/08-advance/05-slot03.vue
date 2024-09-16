<template>
    <h3>元件外網頁模板傳入元件內：不設定名稱(使用default)</h3>
    <Slot02Comp1>
        <div>Message：this is message</div>
    </Slot02Comp1>
    <br><br>

    <h3>元件外網頁模板傳入元件內：設定名稱</h3>
    <Slot02Comp2>
        <template v-slot:name1>
            <div>this is paragraph：name1</div>
        </template>
        <template #name2>
            <div>this is paragraph：name2</div>
        </template>
    </Slot02Comp2>
</template>
    
<script setup>
    import Slot02Comp1 from "../../components/08-advance/05-slot03-comp1.vue";
    import Slot02Comp2 from "../../components/08-advance/05-slot03-comp2.vue";

</script>
    
<style scoped>
    
</style>
