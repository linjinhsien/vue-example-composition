<template>
    <h3>元件外網頁模板傳入元件內：&lt;slot&gt;</h3>
    <Slot01Comp1>
        <div>Message：this is message</div>
    </Slot01Comp1>
    <br>

    <h3>元件外網頁模板：使用外部資料；元件內網頁模板：使用內部資料</h3>
    <Slot01Comp2>
        <div>Message (outside)：{{ messageOutside }}</div>
    </Slot01Comp2>

</template>
    
<script setup>
    import Slot01Comp1 from "../../components/08-advance/05-slot01-comp1.vue";
    import Slot01Comp2 from "../../components/08-advance/05-slot01-comp2.vue";
    import { ref } from "vue";
    const messageOutside = ref("outside")

</script>
    
<style scoped>
    
</style>
