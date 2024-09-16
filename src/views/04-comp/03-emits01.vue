<template>
    <h3>emits1</h3>
    <h3>元件內事件傳出元件外</h3>
    <div>
        <Emits01Comp01 @custom-event="docustomevent"></Emits01Comp01>
    </div>
</template>
    
<script setup>
    import Emits01Comp01 from '../../components/04-comp/03-emits01-comp1.vue'
    function docustomevent(param1, param2) {
        console.log("docustomevent", param1, param2)
    }
</script>
    
<style>
    
</style>