<template>
    <div id="div1" ref="div2">hehehe</div>
    <button @click="doclick1">JavaScript</button>｜
    <button @click="doclick2">vue's ref</button>
    <br><br>

    <ul>
        <li v-for="(item, index) in array" :key="index" ref="listitem">
            {{item}}
        </li>
    </ul>
    <button @click="doclick3">li items</button>
</template>

<script setup>
    import { ref, reactive } from "vue";
    function doclick1() {
        let div1 = document.querySelector("#div1")
        console.log("div1", div1.innerHTML)
    }

    const div2 = ref(null)
    function doclick2() {
        console.log("div2", div2.value.innerHTML)
    }

    const array = reactive(["item1", "item2", "item3", "item4", "item5"])
    const listitem = ref(null)
    function doclick3() {
        console.log("listitem", listitem.value)
        listitem.value.forEach(function(element, index) {
            console.log("element", element, "index", index)
        })
    }
</script>
    
<style>
    
</style>