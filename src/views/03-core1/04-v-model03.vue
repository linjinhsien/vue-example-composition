<template>
    <h3>基礎From Control</h3>
    <form>
        <table>
            <tr>
                <td>Name1 : </td>
                <td><input type="text" name="name1" v-model="name1"></td>
            </tr>
            <tr>
                <td>Name2 : </td>
                <td>
                    <input type="checkbox" name="name2opt1" v-model="name2opt1">選項1
                    <input type="checkbox" name="name2opt2" v-model="name2opt2">選項2
                    <input type="checkbox" name="name2opt3" v-model="name2opt3">選項3
                </td>
            </tr>

            <tr>
                <td>Name3 : </td>
                <td>
                    <input type="checkbox" name="name3" v-model="name3" value="optA">選項A
                    <input type="checkbox" name="name3" v-model="name3" value="optB">選項B
                    <input type="checkbox" name="name3" v-model="name3" value="optC">選項C
                </td>
            </tr>

            <tr>
                <td>Name4 : </td>
                <td>
                    <input type="radio" name="name4" v-model="name4" value="1">選項1
                    <input type="radio" name="name4" v-model="name4" value="2">選項2
                    <input type="radio" name="name4" v-model="name4" value="3">選項3
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="button" value="清除資料" v-on:click="clearData()">
                </td>
            </tr>
        </table>
    </form>
    <div>
        <div>Name1：{{name1}}</div>
        <div>Name2：opt1={{name2opt1}}、opt2={{name2opt2}}、opt3={{name2opt3}}</div>
        <div>Name3：{{name3}}</div>
        <div>Name4：{{name4}}</div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const name1 = ref("");
    const name2opt1 = ref(false);
    const name2opt2 = ref(false);
    const name2opt3 = ref(false);
    const name3 = ref([]);
    const name4 = ref(null);

    function clearData() {
        name1.value = "";
        name2opt1.value = false;
        name2opt2.value = false;
        name2opt3.value = false;
        name3.value = [];
        name4.value = null;
    }
</script>

<style>

</style>