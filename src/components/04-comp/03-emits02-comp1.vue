<template>
    <button type="button" @click="doclick">發送</button>
</template>
    
<script setup>
    const emits = defineEmits({
        "customEvent": function(param1, param2) {
            if(param1 !== undefined && param2 !== undefined) {
                return true
            } else {
                return false
            }
        }
    })
    function doclick() {
        // emits("customEvent", "參數1", new Date())
        emits("customEvent", "參數1")
    }
</script>
    
<style>
    
</style>