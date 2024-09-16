<template>
    <h3>檔案上傳：多檔</h3>
    <div>
        <table>
            <tr>
                <td>檔案：</td>
                <td>
                    <FileUpload class="btn btn-primary"	accept=".doc,.docx,.pdf"
                                input-id="files" input-name="files" v-model="files"
                                :multiple="true">
                        選擇檔案
                    </FileUpload>
                </td>
                <td></td>
            </tr>

            <tr v-for="(file, index) in files" :key="file.id">
                <td></td>
                <td>{{ file.name }}</td>
                <td><input type="button" value="刪除檔案" @click="deleteFile(file.id)"></td>
            </tr>
            <tr>
                <td>說明：</td>
                <td><input type="text" id="desc" name="desc" v-model="desc"></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="上傳檔案" @click="domultiple()">
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
        for (let i = 0; i < selected.length; i++) {
            let uploadFile = selected[0];
            if (uploadFile.size > 10000000) {
                alert("檔案大小超出限制(10M)");
                return false;
            }
        }
        return true;
    }
    function domultiple() {
        if (!validate(files.value)) {
            files.value = [];
            return;
        }
        // 利用File物件產生上傳用的HTML Form資料
        let formData = new FormData();
        for(let i = 0; i < files.value.length; i++) {
            formData.append("files", files.value[i].file);
        }
        formData.append("desc", desc.value);
        console.log("formData", formData);

        //使用Axios上傳檔案
    }
    function deleteFile(id) {
        for (let i = 0; i < files.value.length; i++) {
            if (files.value[i].id === id) {
                files.value.splice(i, 1);
                break;
            }
        }
        console.log("files.value", files.value);
    }
</script>

<style>

</style>
