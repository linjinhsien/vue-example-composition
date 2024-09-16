<template>
    <h3>bootstrap card：元件</h3>
    <div class="row">
        <Card v-for="item in products" :key="item.id" :item="item"
                @custom-open-update="showDialog" @custom-delete="callRemove">
        </Card>
    </div>
</template>

<script setup>
    import Card from '../../components/05-impl/01-card03-comp1.vue'
    import sources from '../../common/products.js'
    import { ref, onMounted } from 'vue'
    const products = ref({})
    onMounted(function() {
        products.value = sources
    })
    function showDialog(action, data) {
        console.log("showDialog", action, data)
    }
    function callRemove(data) {
        console.log("callRemote", data)
    }
</script>

<style>
    
</style>