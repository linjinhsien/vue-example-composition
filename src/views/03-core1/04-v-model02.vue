<template>
    <h3>v-model修飾字</h3>
    <div>Normal：<input type="text" v-model="name0"></div>
    <div>v-model：'{{name0}}'、{{typeof name0}}</div>
    <br>

    <div>Lazy：<input type="text" v-model.lazy="name1"></div>
    <div>v-model.lazy：'{{ name1 }}'</div>
    <br>

    <div>Number：<input type="text" v-model.number="name2"></div>
    <div>v-model.number：{{ name2 }}, {{typeof name2}}</div>
    <br>

    <div>Trim：<input type="text" v-model.trim="name3"></div>
    <div>v-model.trim：'{{ name3 }}'</div>
</template>

<script setup>
    import { ref } from 'vue';
    const name0 = ref("this is normal");
    const name1 = ref("this is lazy");
    const name2 = ref(100);
    const name3 = ref("this is trim");
</script>

<style>

</style>