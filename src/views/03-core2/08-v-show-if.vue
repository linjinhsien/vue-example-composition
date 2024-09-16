<template>
    <h3>v-if</h3>
    <div>
        <input type="number" v-model="option">：
        <span v-if="option===1">Option===1</span>
        <span v-else-if="option===2">Option===2</span>
        <span v-else>其他</span>
    </div>

    <br><br>

    <h3>v-show</h3>
    <div>
        <input type="checkbox" v-model="isShow">：
        <span v-show="isShow">顯示</span>
        <span v-show="!isShow">不顯示</span>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const isShow = ref(false);
    const option = ref(1);

</script>

<style scoped>

</style>