<template>
    <h4>路由</h4>

    <h5>重新導向</h5>
    <RouterLink to="/03/router/1">重新導向：Home /</RouterLink>｜
    <RouterLink :to="{ name: '03-router-link-2'}">重新導向 Yahoo!</RouterLink>｜
    <br><br>

    <h5>動態參數</h5>
    <input type="text" v-model="msg">：<RouterLink :to="{ name: '03-router-link', params: { name: msg }}">動態參數</RouterLink>
    <div>param參數：{{ route.params.name }}</div>
    <br><br>

    <h5>動態轉址</h5>
    <button type="button" @click="doclick">動態轉址：Home /</button>
    <br><br>

</template>

<script setup>
    import { ref } from 'vue';
    const msg = ref("");

    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute();       //動態參數
    const router = useRouter();     //動態轉址
    function doclick() {
        router.push("/");
    }
</script>

<style scoped>

</style>