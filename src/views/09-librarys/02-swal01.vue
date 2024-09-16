<template>
    <h3>SweetAlert2</h3>
    <button @click="dofail">失敗</button>｜
    <button @click="dosuccess">成功</button>｜
    <button @click="dodecision">抉擇</button>｜
    <button @click="doloading">載入</button>
</template>
    
<script setup>
    import Swal from 'sweetalert2'
    function doloading() {
        Swal.fire({
            text: "Loading......",
            allowOutsideClick: false,
            showConfirmButton: false,
        })
        setTimeout(function() {
            Swal.close()
        }, 5000);
    }

    function dodecision() {
        Swal.fire({
            text: "確定？",
            icon: 'warning',
            allowOutsideClick: false,
            confirmButtonText: '確認',
            showCancelButton: true,
            cancelButtonText: '取消',
        }).then(function (result) {
            if (result.isConfirmed) {
                console.log("Confirmed clicked")
                Swal.close()
            } else {
                console.log("Cancel clicked")
            }
        })
    }

    function dosuccess() {
        Swal.fire({
            text: '成功訊息',
            icon: 'success',
            allowOutsideClick: false,
            confirmButtonText: '確認',
        }).then(function (result) {
            if (result.isConfirmed) {
                console.log("Confirmed clicked")
                Swal.close()
            }
        })
    }

    function dofail() {
        Swal.fire({
            text: '失敗訊息',
            icon: 'error',
            allowOutsideClick: false,
            confirmButtonText: '確認',
        })
    }
</script>
    
<style>
    
</style>
