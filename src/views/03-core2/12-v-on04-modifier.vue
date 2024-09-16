<template>
    <h4>事件處理：key事件修飾字</h4>
    <div>任意key：<input type="text" @keydown="dokeydown('any')"></div>
    <br>

    <div>a：<input type="text" @keydown.a="dokeydown('a')"></div>
    <div>a.exact：<input type="text" @keydown.a.exact="dokeydown('a.exact')"></div>
    <br>

    <div>page-down、上、下、左、右、Space、Tab、Enter、Esc：</div>
    <div>
        <input type="text" @keydown.page-down.up.down.left.right.space.tab.enter.esc="dokeydown(new Date())">
    </div>
    <br>

    <div>Delete或Bckspace：<input type="text" @keydown.delete="dokeydown('delete')"></div>
    <br>

    <div>ctrl+a：<input type="text" @keydown.ctrl.a="dokeydown('ctrl.a')"></div>
    <div>ctrl+alt+shift+meta+a：</div>
    <div>
        keydown：<input type="text" @keydown.ctrl.alt.shift.meta.a="dokeydown('ctrl.alt.shift.meta.a')">
    </div>
    <div>
        keyup：<input type="text" @keyup.ctrl.alt.shift.meta.a="dokeyup('ctrl.alt.shift.meta.a')">
    </div>
</template>

<script setup>
    function dokeydown(name) {
        console.log("dokeydown=" + name)
    }
    function dokeyup(name) {
        console.log("dokeyup=" + name)
    }
</script>

<style scoped>

</style>