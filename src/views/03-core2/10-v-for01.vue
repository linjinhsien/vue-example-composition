<template>
    <h4>陣列(內含字串)</h4>
    <ul>
        <li v-for="(item, index) in array" :key="index">{{index}}：{{item}}</li>
    </ul>

    <h4>陣列(內含物件)</h4>
    <ul>
        <li v-for="product in products" v-bind:key="product.id">{{product.id}}：{{product.name}}</li>
    </ul>

    <h4>陣列(內含物件)</h4>
    <ul>
        <li v-for="({name, price}, index) in products" v-bind:key="index">{{name}}：{{price}}</li>
    </ul>

    <h4>物件</h4>
    <ul>
        <li v-for="(value, name, index) in obj" :key="name">{{index}}：{{name}}：{{value}}</li>
    </ul>

    <h4>整數</h4>
    <ul>
        <li v-for="(item) in 5" :key="item">{{item}}</li>
    </ul>

    <h4>多個標籤(使用&lt;template&gt;)</h4>
    <ul>
        <template v-for="product in products" :key="product.id">
            <li>{{ product.name }}</li>
            <li class="error">{{ product.price }}</li>
        </template>
    </ul>

    <h4>v-for+v-if</h4>
    <ul>
        <template v-for="product in products" v-bind:key="product.id">
            <li v-if="product.name.length<10">{{product.name}}</li>
        </template>
    </ul>
</template>

<script setup>
    import { ref } from "vue";
    const array = ref(['data1', 'data2', 'data3', 'data4', 'data5']);
    const products = ref([
        {id:1, name: 'Coca Cola', price: 30.0},
        {id:2, name: 'Pepsi Cola', price: 35.0},
        {id:3, name: 'Root beer', price: 40.0},
        {id:4, name: 'Mountain Dew', price: 45.0},
        {id:5, name: 'Sprite', price: 25.0},
    ]);
    const obj = ref({
        "name1": "value1",
        "name2": "value2",
        "name3": "value3",
        "name4": "value4",
        "name5": "value5",
    });
</script>

<style scoped>
    .error {
        color: red;
    }
</style>