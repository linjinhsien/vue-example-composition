<template>
    <h5>custome-name1：{{customName1}}</h5>
    <h5>custome-name2：{{customName2}}</h5>

</template>
    
<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        "customName1": {
            type: String,
            required: false,
            default: "Default Name1",
        },
        "customName2": {
            type: String,
            required: true,
            default: "Default Name2",
            validator: function(value) {
                if(value!=null && value.length!=0) {
                    return true
                } else {
                    return false
                }
            },
        }
    })
</script>
    
<style>
    
</style>
