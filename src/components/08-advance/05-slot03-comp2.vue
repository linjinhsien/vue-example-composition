<template>
    <div class="square">
        <slot name="name2"></slot>
        <slot name="name1"></slot>
    </div>
</template>
    
<script setup>
    
</script>
    
<style scoped>
    .square {
        width: 200px;
        height: 200px;
        background: gray;
    }
</style>