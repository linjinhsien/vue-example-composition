<template>
    <h3>From Select (動態)</h3>
    <form>
        <table>
            <tr>
                <td>城市：</td>
                <td>
                    <select v-model="city" @change="docitychange">
                        <option :value="null">請輸入</option>
                        <option v-for="item in cities" :key="item.id" :value="item.code">{{item.name}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>區域：</td>
                <td>
                    <select v-model="district">
                        <option :value="null">請輸入</option>
                        <option v-for="item in districts" :key="item.id" :value="item.code"
                                v-show="city==item.citycode">
                            {{item.name}}
                        </option>
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <div>選擇結果：{{city}}：{{district}}</div>
</template>

<script setup>
    import { ref } from "vue";
    const cities = ref([
        {id: 1, name: "台北", code: "taipei"},
        {id: 2, name: "台中", code: "taichung"},
        {id: 3, name: "高雄", code: "kaohsiung"}
    ]);
    const city = ref(null);
    const districts = ref([
        {id: 1, name: "文山區", code: "文山區", citycode: "taipei"},
        {id: 2, name: "大安區", code: "大安區", citycode: "taipei"},
        {id: 3, name: "南港區", code: "南港區", citycode: "taipei"},
        {id: 4, name: "北屯區", code: "北屯區", citycode: "taichung"},
        {id: 5, name: "南屯區", code: "南屯區", citycode: "taichung"},
        {id: 6, name: "西屯區", code: "西屯區", citycode: "taichung"},
        {id: 7, name: "岡山鎮", code: "岡山鎮", citycode: "kaohsiung"},
        {id: 8, name: "旗山鎮", code: "旗山鎮", citycode: "kaohsiung"},
        {id: 9, name: "美濃鎮", code: "美濃鎮", citycode: "kaohsiung"}
    ]);
    const district = ref(null);
    
    function docitychange() {
        district.value = null
    }
</script>

<style scoped>

</style>