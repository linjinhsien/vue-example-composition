<template>
    <h3>function vs computed vs watch 2</h3>

    <h3>蘋果：{{appleCount}}</h3>
    <div>
        <button type="button" @click="addApple">加</button>
        <button type="button" @click="substrackApple">減</button>
    </div>

    <h3>橘子：{{orangeCount}}</h3>
    <div>
        <button type="button" @click="addOrange">加</button>
        <button type="button" @click="substrackOrange">減</button>
    </div>

    <h3>蘋果＋橘子：{{totalCount}}</h3>
</template>
    
<script setup>
    import { ref, computed, watch } from "vue";

    const appleCount = ref(0)
    function addApple() {
        appleCount.value++
    }
    function substrackApple() {
        appleCount.value--
    }

    const orangeCount = ref(0)
    function addOrange() {
        orangeCount.value++
    }
    function substrackOrange() {
        orangeCount.value--
    }

    const totalCount = computed(function() {
        return appleCount.value + orangeCount.value
    })

    watch(appleCount, function(newValue, oldValue) {
            if(appleCount.value < 0) {
                appleCount.value = 0
            }
        },
        { immediate: true }
    )
    watch(orangeCount, function(newValue, oldValue) {
            if(orangeCount.value < 0) {
                orangeCount.value = 0
            }
        },
        { immediate: true}
    )
</script>
    
<style scoped>
    
</style>