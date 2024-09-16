<template>
    <h3>bootstrap modal</h3>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#compModal">顯示modal</button>
        <button type="button" class="btn btn-primary" @click="openModal">顯示modal(程式)</button>
    </div>

    <div class="modal fade" id="compModal" tabindex="-1" aria-labelledby="compModalLabel" aria-hidden="true" ref="compref">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="compModalLabel">Modal Title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Modal內容
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">關閉</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'
    import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

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
</script>
    
<style>
    
</style>