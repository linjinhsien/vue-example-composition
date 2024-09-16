<template>
    <h3>bootstrap card：無元件</h3>
    <div class="row">
        <div class="col-lg-3 col-md-6" v-for="item in products" :key="item.id">
            <div class="card">
                <img class="card-img-top" :alt="item.name" :src="item.photo" style="width: 215px; height: 215px;">

                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <div class="card-text text-danger text-end">NT$ {{ item.price }}</div>
                    <div class="row">
                        <div class="col text-start">
                            <a href="#" class="btn btn-primary" @click="showDialog('update', item.id)" style="width: 100px; height: 40px;">開啟修改</a>
                        </div>
                        <div class="col text-end">
                            <a href="#" class="btn btn-primary" @click="callRemote(item.id)" >刪除</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import sources from '../../common/products.js'
    import { ref, onMounted } from 'vue'

    const products = ref({})
    onMounted(function() {
        products.value = sources
    })

    function showDialog(action, data) {
        console.log("showDialog", action, data)
    }
    function callRemote(data) {
        console.log("callRemote", data)
    }
</script>
    
<style>
    
</style>