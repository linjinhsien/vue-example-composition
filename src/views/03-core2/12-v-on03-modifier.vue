<template>
    <h4>事件處理：修飾字</h4>
    <div><a @click="handle('no prevent')" href="https://tw.yahoo.com">no prevent</a></div>
    <div><a @click.prevent="handle('prevent')" href="https://tw.yahoo.com">prevent</a></div>
    <br>

    <div><button @click.once="handle('once')">once</button></div>
    <br>

    <div class="layout">
        no modifier
        <div class="outer" @click="handle('no modifier-outer')">
            <span>Outer</span>
            <div class="inner" @click="handle('no modifier-inner')">Inner</div>
        </div>
    </div>

    <div class="layout">
        stop (at inner)
        <div class="outer" @click="handle('stop-outer')">
            <span>Outer</span>
            <div class="inner" @click.stop="handle('stop-inner')">Inner</div>
        </div>
    </div>

    <div class="layout">
        self (at outer)
        <div class="outer" @click.self="handle('self-outer')">
            <span>Outer</span>
            <div class="inner" @click="handle('self-inner')">Inner</div>
        </div>
    </div>

    <div class="layout">
        capture (both outer & inner)
        <div class="outer" @click.capture="handle('capture-outer')">
            <span>Outer</span>
            <div class="inner" @click.capture="handle('capture-inner')">Inner
            </div>
        </div>
    </div>

    <div class="layout">
        Mouse Button
        <div class="outer"
                @click="handle('click')"
                @click.left="handle('mouse left')"
                @click.right="handle('mouse right')"
                @click.middle="handle('mouse middle')">
            <span>click here</span>
        </div>
    </div>
</template>

<script setup>
    function handle(name) {
        console.log("handle=" + name)
    }
</script>

<style scoped>
    .layout {
        float: left;
        margin-right: 3rem
    }
    .outer {
        width: 90px;
        height: 90px;
        background: gray;
    }
    .inner {
        width: 50px;
        height: 50px;
        background: red;
    }
</style>