<template>
    <h3>From Select (靜態)</h3>
    <form>
        <table>
            <tr>
                <td>城市：</td>
                <td>
                    <select v-model="city">
                        <option value="null">請輸入</option>
                        <option value="taipei">台北</option>
                        <option value="taichung">台中</option>
                        <option value="kaohsiung">高雄</option>
                        
                    </select>
                </td>
            </tr>
        </table>
    </form>
    <div>選擇結果：{{city}}</div>
</template>

<script setup>
    import { ref } from "vue";
    const city = ref(null);
</script>

<style scoped>

</style>