<template>
    <h3>Composition API+setup()：{{ count }}</h3>
</template>
    
<script>
import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0)
        return {
            count
        }
    }
}
</script>
    
<style>
    
</style>