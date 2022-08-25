import mainPage from "../views/Main.vue";
import homePage from "../views/home/Home";
import qyglPage from "../views/qygl/qygl";
import bxdPage from "../views/bxd/bxd";
import jdrPage from "../views/jdr/jdr";
import shyPage from "../views/shy/shy";
import hcglPage from "../views/hcgl/hcgl";
import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        name:"main",
        component:mainPage,
        children: [
            {
                path:'/home',
                name:"首页",
                component:homePage,
            },
            {
                path:'/qygl',
                name:"区域管理",
                component:qyglPage,
            },
            {
                path:'/bxd',
                name:"报修单",
                component:bxdPage,
            },
            {
                path:'/jdr',
                name:"接单人",
                component:jdrPage,
            },
            {
                path:'/shy',
                name:"审核员",
                component:shyPage,
            },
            {
                path:'/hcgl',
                name:"耗材管理",
                component:hcglPage,
            },
        ]
    },
]

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)
export {router}