<template>
    <h5>custome-name1：{{customName1}}</h5>
    <h5>custome-name2：{{customName2}}</h5>

</template>
    
<script setup>
    const props = defineProps(["customName1", "customName2"])

    console.log("customName1", props.customName1, "customName2", props.customName2);
    // props.customName1 = "new value"
</script>

<style scoped>
    
</style>