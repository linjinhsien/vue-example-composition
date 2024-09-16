<template>
     <h3>{{ message }}</h3>
     <CompOne></CompOne>
     <CompTwo></CompTwo>
</template>

<script setup>
import CompOne from "./02-comp01.vue";
import CompTwo from "./02-comp02.vue";
import { ref } from 'vue'

const message = ref("Vue01 App")
</script>

<style></style>
