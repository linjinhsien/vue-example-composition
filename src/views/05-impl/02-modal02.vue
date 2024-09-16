<template>
    <h3>bootstrap modal：元件</h3>
    <div>
        <button type="button" class="btn btn-primary" @click="showDialog('insert')">開啟新增</button>
        <button type="button" class="btn btn-primary" @click="showDialog('update')">開啟修改</button>
    </div>

    <Modal ref="modal" :is-show-button="isShowButton"
            v-model:id="product.id"
            v-model:name="product.name"
            v-model:price="product.price"
            v-model:make="product.make"
            v-model:expire="product.expire"
            @custom-insert="callCreate"
            @custom-update="callModify"></Modal>

</template>
    
<script setup>
    import Modal from '../../components/05-impl/02-modal02-comp1.vue'
    import { ref } from 'vue'

    const isShowButton =  ref(false);
    const product = ref({})
    const modal = ref(null)

    function showDialog(action) {
        if (action === "insert") {
            isShowButton.value = true;
            product.value = {};
        } else {
            isShowButton.value = false;
            product.value = {
                id: 100,
                name: "hahaha",
                price: 123,
                make: "2024-01-25",
                expire: 456,
            }
        }
        modal.value.openModal();
    }

    function callCreate() {
        console.log("callCreate", product.value);
        modal.value.closeModal();
    }

    function callModify() {
        console.log("callModify", product.value);
        modal.value.closeModal();
    }
</script>
    
<style>
    
</style>