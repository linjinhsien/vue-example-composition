<template>
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <img class="card-img-top" :alt="item.name" :src="item.photo">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <div class="card-text text-danger text-end">NT$ {{ item.price }}</div>
                <div class="row">
                    <div class="col text-start">
                        <a href="#" class="btn btn-primary" @click="doclick1('update', item.id)">開啟修改</a>
                    </div>
                    <div class="col text-end">
                        <a href="#" class="btn btn-primary" @click="doclick2(item.id)">刪除</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["item"])
    const emits = defineEmits(["customOpenUpdate", "customDelete"])
    function doclick1(action, data) {
        emits("customOpenUpdate", action, data);
    }
    function doclick2(data) {
        emits("customDelete", data);
    }
</script>
    
<style>
    
</style>