<template>
    <div id="compModal" class="modal fade" tabindex="-1" aria-labelledby="compModalLabel" aria-hidden="true" ref="compref">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="compModalLabel">Product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table>
                        <tr>
                            <td>Id : </td>
                            <td><input type="text" name="id" :value="id" @input="emits('update:id', $event.target.value)"></td>
                        </tr>
                        <tr>
                            <td>Name : </td>
                            <td><input type="text" name="name" :value="name" @input="emits('update:name', $event.target.value)"></td>
                        </tr>
                        <tr>
                            <td>Price : </td>
                            <td><input type="text" name="price" :value="price" @input="emits('update:price', $event.target.value)"></td>
                        </tr>
                        <tr>
                            <td>Make : </td>
                            <td><input type="text" name="make" :value="make" @input="emits('update:make', $event.target.value)"></td>
                        </tr>
                        <tr>
                            <td>Expire : </td>
                            <td><input type="text" name="expire" :value="expire" @input="emits('update:expire', $event.target.value)"></td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" v-show="isShowButton" @click="emits('customInsert')">新增</button>
                    <button type="button" class="btn btn-primary" v-show="!isShowButton" @click="emits('customUpdate')">修改</button>

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'
    import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

    const props = defineProps(["isShowButton", "id", "name", "price", "make", "expire"])
    const emits = defineEmits(["customInsert", "customUpdate", "update:id", "update:name", "update:price", "update:make", "update:expire"])

    const compref = ref(null)
    const compobj = ref(null)
    onMounted(function() {
        compobj.value = new bootstrap.Modal(compref.value)
    })
    function openModal() {
        compobj.value.show();
    }
    function closeModal() {
        compobj.value.hide();
    }
    defineExpose({
        openModal,
        closeModal,
    });
</script>
    
<style>
    
</style>