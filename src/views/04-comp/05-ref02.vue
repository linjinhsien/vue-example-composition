<template>
    <div><button @click="doclick">Parent</button></div>
    <Ref02Comp1 ref="comp01"></Ref02Comp1>
</template>
    
<script setup>
    import Ref02Comp1 from "../../components/04-comp/06-ref02-comp1.vue"
    import { ref } from "vue"
    const comp01 = ref(null)

    function doclick() {
        console.log("doclick public", comp01.value.publicCount)
        console.log("doclick private", comp01.value.privateCount)
        comp01.value.publicMethod()
    }
</script>
    
<style scoped>
    
</style>