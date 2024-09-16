<template>
    <h3>watch 3</h3>
    
    <h3>監控物件(淺層)</h3>
    <div>obj1：{{obj1}}</div>
    <div>
        <input type="text" v-model="obj1.prop1" />：<input type="text" v-model="obj1.prop2" />
    </div>
    <br><br>

    <h3>監控物件(深層)</h3>
    <div>obj1：{{obj2}}</div>
    <div>
        <input type="text" v-model="obj2.prop1" />：<input type="text" v-model="obj2.prop2" />
    </div>
    <br><br>

    <h3>監控物件屬性</h3>
    <div>obj3：{{obj3}}</div>
    <div>
        <input type="text" v-model="obj3.prop1" />：<input type="text" v-model="obj3.prop2" />
    </div>
</template>
    
<script setup>
    import { ref, reactive, watch } from "vue";
    
    const obj1 = ref({
        prop1: "obj1.prop1",
        prop2: "obj1.prop2",
    })
    watch(obj1, function(newValue, oldValue) {
            console.log("obj1", "new", newValue, "old", oldValue);
        },
        { deep: false }
    )

    const obj2 = ref({
        prop1: "obj2.prop1",
        prop2: "obj2.prop2",
    })
    watch(obj2, function(newValue, oldValue) {
            console.log("obj1", "new", newValue, "old", oldValue);
        },
        { deep: true }
    )

    const obj3 = ref({
        prop1: "obj3.prop1",
        prop2: "obj3.prop2",
    })
    watch(function() {
            return obj3.value.prop1
        }, 
        function(newValue, oldValue) {
            console.log("obj3.prop1", "new", newValue, "old", oldValue);
        }
    )
</script>
    
<style scoped>
    
</style>
