<template>
    <h3>bootstrap card</h3>
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <img class="card-img-top" alt="Product1" src="/images/product05.jpg">
            <div class="card-body">
                <h5 class="card-title">標題</h5>
                <div class="card-text text-danger text-end">文字說明</div>
                <div class="row">
                    <div class="col text-start">
                        <a href="#" class="btn btn-primary" @click="doclick1(1)">按鈕1</a>
                    </div>
                    <div class="col text-end">
                        <a href="#" class="btn btn-primary" @click="doclick2(2)">按鈕2</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    function doclick1(data) {
        console.log("doclick1", data)
    }
    function doclick2(data) {
        console.log("doclick2", data)
    }
</script>
    
<style>
    
</style>