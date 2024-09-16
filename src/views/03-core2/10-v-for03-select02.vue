<template>
    <h3>From Select (動態)</h3>
    <form>
        <table>
            <tr>
                <td>輸入城市：</td>
                <td>
                    <input type="text" v-model="city">
                </td>
            </tr>
            <tr>
                <td>城市：</td>
                <td>
                    <select v-model="city">
                        <option :value="null">請輸入</option>
                        <option v-for="item in cities" :key="item.id" :value="item.code">{{item.name}}</option>
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <div>選擇結果：{{city}}</div>
</template>

<script setup>
    import { ref } from "vue";
    const cities = ref([
        {id: 1, name: "台北", code: "taipei"},
        {id: 2, name: "台中", code: "taichung"},
        {id: 3, name: "高雄", code: "kaohsiung"}
    ]);
    const city = ref(null);
</script>

<style scoped>

</style>