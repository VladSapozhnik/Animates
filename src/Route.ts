import {createRouter, createWebHistory} from "vue-router";
import Main from "./components/Main.vue";
import CardPage from "./components/CardPage/CardPage.vue";
import ProfilePage from "./components/ProfilePage.vue";

const routes = [
    {
        path: "/animate-project/",
        name: 'main',
        component: Main
    },
    {
        path: "/card/:id",
        name: 'cardPage',
        component: CardPage
    },
    {
        path: "/profile/:id",
        name: 'profilePage',
        component: ProfilePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;