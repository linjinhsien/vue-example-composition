<template>
    <h3>dynamic01</h3>
    <h3>動態元件(&lt;component&gt;)</h3>
    <br>

    <div><component :is="Comp1"></component></div>
    <hr>
    <div><component :is="Comp2"></component></div>
    <hr>
    <div><component :is="Comp3"></component></div>

</template>
    
<script setup>
    import Comp1 from '../../components/08-advance/04-dynamic-comp1.vue'
    import Comp2 from '../../components/08-advance/04-dynamic-comp2.vue'
    import Comp3 from '../../components/08-advance/04-dynamic-comp3.vue'

</script>
    
<style scoped>
    
</style>
