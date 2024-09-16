<template>
    <div class="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" :to="{ name: 'home-link' }">Composition API</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Basics</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-first01-link' }">01-first01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-first02-link' }">01-first02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-first03-link' }">01-first03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-comp01-link' }">02-comp01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-comp02-link' }">02-comp02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '02-comp-link' }">02-comp</RouterLink></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Core 1</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-template-link' }">01-template</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-data01-link' }">02-data01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-data02-link' }">02-data02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-methods01-link' }">03-methods01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-model01-link' }">04-model01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-model02-link' }">04-model02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-model03-link' }">04-model03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-on01-link' }">05-on01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-on02-link' }">05-on02</RouterLink></li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Core 2</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-text-link' }">07-text</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-show-if-link' }">08-showif</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-bind-link' }">09-bind</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-for01-link' }">10-for01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-for02-link' }">10-for02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-for03-select01-link' }">10-for03-select01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-for03-select02-link' }">10-for03-select02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-for03-select03-link' }">10-for03-select03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-pre-link' }">11-pre</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-on03-modifier-link' }">12-on03-modifier</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-on04-modifier-link' }">12-on04-modifier</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '03-router-link' }">13-router</RouterLink></li>

                            </ul>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Comp</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-registration01-link' }">01-registration01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-props01-link' }">02-props01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-props02-link' }">02-props02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-emits01-link' }">03-emits01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-emits02-link' }">03-emits02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-model01-link' }">04-v-model01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-model02-link' }">04-v-model02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-ref01-link' }">05-ref01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-ref02-link' }">05-ref02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '04-lifecycle-link' }">06-lifecycle</RouterLink></li>

                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Implement</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-card01-link' }">01-card01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-card02-link' }">01-card02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-card03-link' }">01-card03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-modal01-link' }">02-modal01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-modal02-link' }">02-modal02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-combine01-link' }">03-combine01</RouterLink></li>

                                <li><RouterLink class="dropdown-item" :to="{ name: '05-select01-link' }">05-select01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '05-select02-link' }">05-select02</RouterLink></li>

                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Advance</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-computed01-link' }">01-computed01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-computed02-link' }">01-computed02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-computed03-link' }">01-computed03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-watch01-link' }">02-watch01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-watch02-link' }">02-watch02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-watch03-link' }">02-watch03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-difference01-link' }">03-difference01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-difference02-link' }">03-difference02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-dynamic01-link' }">04-dynamic01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-dynamic02-link' }">04-dynamic02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-slot01-link' }">05-slot01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-slot02-link' }">05-slot02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-slot03-link' }">05-slot03</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '08-slot04-link' }">05-slot04</RouterLink></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Librarys</a>
                            <ul class="dropdown-menu">
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-bootstrap01-link' }">01-bootstrap01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-swal01-link' }">02-swal01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-paginate01-link' }">03-paginate01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-file-upload01-link' }">04-file-upload01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-file-upload02-link' }">04-file-upload02</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-chart01-link' }">05-chart01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-flat-pickr01-link' }">06-flat-pickr01</RouterLink></li>
                                <li><RouterLink class="dropdown-item" :to="{ name: '09-flat-pickr02-link' }">06-flat-pickr02</RouterLink></li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
    
<script setup>

</script>
    
<style>
    
</style>
