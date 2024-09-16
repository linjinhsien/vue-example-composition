<template>
    <h3>computed 3</h3>
    <div>
        攝氏：<input type="number" v-model="celsius">度 = 華式：<input type="number" v-model="fahrenheit">度
    </div>
</template>
    
<script setup>
    import { ref, computed } from "vue";

    const celsius = ref(0)
    const fahrenheit = computed({
        get: function() {
            return 9 / 5 * Number(celsius.value) + 32
        },
        set: function(val) {
            celsius.value = (Number(val) - 32) * 5 / 9 
        }
    })
</script>
    
<style scoped>
    
</style>