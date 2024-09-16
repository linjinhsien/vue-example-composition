<template>
    <h3>檔案上傳：單檔</h3>
    <div>
        <table>
            <tr>
                <td>檔案：</td>
                <td>
                    <FileUpload class="btn btn-primary"	accept=".doc,.docx,.pdf"
                                input-id="files" input-name="files" v-model="files">
                        選擇檔案
                    </FileUpload>
                </td>
                <td><span v-if="files.length != 0">{{ files[0].name }}</span></td>
            </tr>
            <tr>
                <td>說明：</td>
                <td><input type="text" id="desc" name="desc" v-model="desc"></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="上傳檔案" v-on:click="dosingle()">
                </td>
            </tr>
        </table>
    </div>
</template>
    
<script setup>
    import FileUpload from 'vue-upload-component'
    import { ref } from 'vue'
    const files = ref([])
    const desc = ref(null)

    function validate(selected) {
        console.log("selected", selected)
        if (selected.length == 0) {
            alert("請選擇檔案");
            return false;
        }
        let uploadFile = selected[0];
        if (uploadFile.size > 10000000) {
            alert("檔案大小超出限制(10M)");
            return false;
        }
        return true;
    }
    function dosingle() {
        if (!validate(files.value)) {
            files.value = [];
            return;
        }
        // 利用File物件產生上傳用的HTML Form資料
        let formData = new FormData();
        formData.append("file", files.value[0].file);
        formData.append("desc", desc.value);
        console.log("formData", formData);

        //使用Axios上傳檔案
    }
</script>
    
<style>
    
</style>
