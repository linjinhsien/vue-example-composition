<template>
    <h3>v-bind</h3>
    <div><a v-bind:href="link" v-bind:title="website">連結1</a></div>
    <div><a :href="'https://www.'+website+'.com'" :title="website">連結2</a></div>
    <br>
    <div><button type="button" :disabled="isDisabled">Clcik</button></div>
    <br>
    <div :style="{'width':'90px', 'height':'90px', 'background-color':'gray'}"></div>
    <br>
    <div :style="styleObj"></div>
    <br>
    <div v-bind="{id: 'xyz', style: styleObj}">v-bind object</div>
    <br>
    <div :class="['error1', 'error2']">v-bind:class array</div>
    <br>
    <div v-bind:[attrname1]="attrvalue1" :[attrname2]="attrvalue2">動態屬性名稱</div>
    <br>
    <!-- <div v-bind:['foo' + bar]="data">非法：動態屬性名稱</div> -->
</template>

<script setup>
    import { ref } from 'vue';
    const website = ref("google");
    const link = ref("https://www.google.com");

    const isDisabled = ref(true);
    const styleObj = ref({
        "width": "90px",
        "height": "90px",
        "background-color": "red"
    });
    const attrname1 = ref("id");
    const attrvalue1 = ref("data1");
    const attrname2 = ref("attr");
    const attrvalue2 = ref("attribute-value");
</script>

<style scoped>
    .error1 {
        color: red;
    }
    .error2 {
        font-size: 24px;
    }
</style>