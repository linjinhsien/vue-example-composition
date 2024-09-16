<template>
    <h3>Bootstrap導覽列</h3>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-brand">網站名稱</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Nav1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nav2</a>
                    </li>
                    <li class="nav-item  dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button"  aria-expanded="false">Links</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link1</a></li>
                            <li><a class="dropdown-item" href="#">Link2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
    
<script setup>
    
</script>
    
<style scoped>
    
</style>