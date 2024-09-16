<template>
    <h3>dynamic02</h3>
    <h3>動態元件(&lt;component&gt;)</h3>
    <div>
        <a class="btn btn-primary" @click="switchComps(Comp1)">Comp1</a>｜
        <a class="btn btn-primary" @click="switchComps(Comp2)">Comp2</a>｜
        <a class="btn btn-primary" @click="switchComps(Comp3)">Comp3</a>｜
    </div>
    <div>
        <keep-alive>
            <component :is="currentComp"></component>
        </keep-alive>
    </div>
</template>
    
<script setup>
    import Comp1 from '../../components/08-advance/04-dynamic-comp1.vue'
    import Comp2 from '../../components/08-advance/04-dynamic-comp2.vue'
    import Comp3 from '../../components/08-advance/04-dynamic-comp3.vue'

    import { shallowRef } from "vue";
    const currentComp = shallowRef(Comp1)
    function switchComps(comp) {
        currentComp.value = comp
    }
</script>
    
<style scoped>
    
</style>
