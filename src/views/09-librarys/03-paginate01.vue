<template>
    <h3>使用分頁</h3>
    <Paginate
        first-last-button="true"
        first-button-text="&lt;&lt;"
        last-button-text="&gt;&gt;"
        prev-text="Prev"
        next-text="Next"
        container-class="pagination"
        :page-count="pages"
        :initial-page="current"
        :click-handler="retrive">
    </Paginate>
</template>
    
<script setup>
    import Paginate from "vuejs-paginate-next"
    import { ref, onMounted } from 'vue'
    const current = ref(1)   //目前分頁
    const pages = ref(10)    //最多需要幾個分頁
    function retrive(page) {
        console.log("page=", page);
        if(page) {
            current.value = page;
        } else {
            current.value = 1;
        }
    }
</script>
    
<style>
    
</style>
