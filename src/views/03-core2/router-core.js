import Text from "./07-v-text.vue";
import ShowIf from "./08-v-show-if.vue";
import Bind from "./09-v-bind.vue";
import For01 from "./10-v-for01.vue";
import For02 from "./10-v-for02.vue";
import For03Select01 from "./10-v-for03-select01.vue";
import For03Select02 from "./10-v-for03-select02.vue";
import For03Select03 from "./10-v-for03-select03.vue";
import Pre from "./11-v-pre.vue";
import On03Modifier from "./12-v-on03-modifier.vue";
import On04Modifier from "./12-v-on04-modifier.vue";
import Router01 from "./13-router.vue";

export default [
    { name: "03-text-link", component: Text, path: "/03/text", title: "07-text" },
    { name: "03-show-if-link", component: ShowIf, path: "/03/showif", title: "08-showif" },
    { name: "03-bind-link", component: Bind, path: "/03/bind", title: "09-bind" },
    { name: "03-for01-link", component: For01, path: "/03/for01", title: "10-for01" },
    { name: "03-for02-link", component: For02, path: "/03/for02", title: "10-for02" },
    { name: "03-for03-select01-link", component: For03Select01, path: "/03/for03-select01", title: "10-for03-select01" },
    { name: "03-for03-select02-link", component: For03Select02, path: "/03/for03-select02", title: "10-for03-select02" },
    { name: "03-for03-select03-link", component: For03Select03, path: "/03/for03-select03", title: "10-for03-select03" },
    { name: "03-pre-link", component: Pre, path: "/03/pre", title: "11-pre" },
    { name: "03-on03-modifier-link", component: On03Modifier, path: "/03/on03-modifier", title: "12-on03-modifier" },
    { name: "03-on04-modifier-link", component: On04Modifier, path: "/03/on04-modifier", title: "12-on04-modifier" },
    { name: "03-router-link", component: Router01, path: "/03/router/:name?", title: "13-router" },
    { name: "03-router-link-1", path: "/03/router/1", redirect: "/" },
    { name: "03-router-link-2", component: Router01, path: "/03/router/2", beforeEnter: function(to, from, next) {
            window.location.href = "https://tw.yahoo.com"
        },
    },

]
