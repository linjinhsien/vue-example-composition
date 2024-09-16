<template>
    <h3>使用Datetimepicker</h3>
    <div>
        <table>
            <tr>
                <td>製造日期 : </td>
                <td><FlatPickr v-model="findMakeStart" :config="flatpickrConfig" @change="findMakeStartChange"/></td>
                <td>~</td>
                <td><FlatPickr v-model="findMakeEnd" :config="flatpickrConfig" @change="findMakeEndChange"/></td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="查詢" @click="callFind()">
                </td>
            </tr>
        </table>
    </div>
</template>
    
<script setup>
    import FlatPickr from 'vue-flatpickr-component'
    import {ref} from 'vue'
    
    const findMakeStart = ref(null);
    const findMakeEnd = ref(null);
    const flatpickrConfig = {
        dateFormat: "Y-m-d H:i:S",
        enableTime: true,
        time_24hr: true,
    }

    function findMakeStartChange(date) {
        findMakeStart.value = date.target.value;
        if (findMakeEnd.value != null && findMakeStart.value > findMakeEnd.value) {
            findMakeEnd.value = findMakeStart.value;
        }
    }

    function findMakeEndChange(date) {
        findMakeEnd.value = date.target.value;
        if (findMakeStart.value != null && findMakeStart.value > findMakeEnd.value) {
            findMakeStart.value = findMakeEnd.value;
        }
    }

    function callFind() {
        if (findMakeStart.value == "") {
            findMakeStart.value = null;
        }
        if (findMakeEnd.value == "") {
            findMakeEnd.value = null;
        }

        let requestBody = {
            findMakeStart: findMakeStart.value,
            findMakeEnd: findMakeEnd.value,
        }

        console.log("requestBody", requestBody);
    }
</script>

<style>

</style>
