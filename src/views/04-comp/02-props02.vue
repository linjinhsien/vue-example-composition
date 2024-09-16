<template>
    <h3>props2</h3>
    <h3>元件內接收資料：使用物件語法</h3>
    
    <div>
        <h4>custom-name1、custom-name2都輸入</h4>
        <Props02Comp01 custom-name1="name1" custom-name2="name2"></Props02Comp01>
    </div>
    <br><br>

    <div>
        <h4>輸入custom-name1</h4>
        <Props02Comp01 custom-name1="name11"></Props02Comp01>
    </div>
    <br><br>

    <div>
        <h4>輸入custom-name2</h4>
        <Props02Comp01 custom-name2="name22"></Props02Comp01>
    </div>
    <br><br>

    <div>
        <h4>custom-name1、custom-name2都不輸入</h4>
        <Props02Comp01></Props02Comp01>
    </div>

</template>
    
<script setup>
    import Props02Comp01 from '../../components/04-comp/02-props02-comp1.vue'

</script>
    
<style>
    
</style>