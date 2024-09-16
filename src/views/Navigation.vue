<template>
    <div class="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" :to="{ name: 'home-link' }">Composition</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item dropdown" v-for="nav in navs" :key="nav.id" >
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{nav.title}}</a>
                            <ul class="dropdown-menu">
                                <li v-for="link in nav.links" :key="link.name">
                                    <RouterLink class="dropdown-item" :to="{ name: link.name }">{{link.title}}</RouterLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
    
<script setup>
    import routerBasics from './02-basics/router-basics.js';
    import routerCore1 from './03-core1/router-core.js';
    import routerCore2 from './03-core2/router-core.js';
    import routerComp from './04-comp/router-comp.js';
    import routerImpl from './05-impl/router-impl.js';
    import routerAdvance from './08-advance/router-advance.js';
    import routerLibrarys from "./09-librarys/router-librarys.js";

    const navs = [
        { id: 1, title: "Basics", links: [ ...routerBasics ] },
        { id: 2, title: "Core1", links: [ ...routerCore1 ] },
        { id: 3, title: "Core2", links: [ ...routerCore2 ] },
        { id: 4, title: "Comp", links: [ ...routerComp ] },
        { id: 5, title: "Implement", links: [ ...routerImpl ] },
        { id: 8, title: "Advance", links: [ ...routerAdvance ] },
        { id: 9, title: "Librarys", links: [ ...routerLibrarys ] },
    ]
</script>

<style>

</style>
