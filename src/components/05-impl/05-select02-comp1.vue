<template>
    <span>
        <span v-if="total===0">查無資料，</span>
        <span v-else>查到 {{total}} 筆資料，</span>
        <span>每頁顯示
            <select size="1" :value="modelValue" @change="dochange">
                <option v-for="item in options" :key="item" :value="item">
                    {{item}}
                </option>
            </select>筆
        </span>
    </span>
</template>
    
<script setup>
    const props = defineProps(["options", "total", "modelValue"])
    const emits = defineEmits(["update:modelValue", "customChange"])
    function dochange(event) {
        emits("update:modelValue", event.target.value)
        emits("customChange")
    }
</script>
    
<style>
    
</style>