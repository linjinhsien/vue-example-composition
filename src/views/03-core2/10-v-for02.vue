<template>
    <h4>雙重迴圈</h4>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{user.name}}
            <ul>
                <li v-for="(item, index) in user.hobby" :key="index">{{item}}</li>
            </ul>
        </li>
    </ul>
</template>

<script setup>
    import { ref } from "vue";
    const users = ref([
        {
            id: 1,
            name: "Alex",
            hobby: ["surfing", "swimming"]
        },
        {
            id: 2,
            name: "Babe",
            hobby: ["fishing", "hiking", "camping"]
        },
        {
            id: 3,
            name: "Carol",
            hobby: ["jogging", "weightlifting"]
        },
    ]);
</script>

<style scoped>
    .error {
        color: red;
    }
</style>