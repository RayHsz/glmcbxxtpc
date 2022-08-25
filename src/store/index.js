import {createStore} from "vuex";

const store =createStore({
    state:{
        isCollapse:true,
        currentMenu: {
            path:"/",
            name:"home",
            label:"首页",
            icon:"user",
            url:"UserManage/UserManage",
        },
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ]
    },
    mutations:{
        updateIsCollapse(state){
            state.isCollapse=!state.isCollapse
        },
        selectMenu(state,val){
            console.log(val.name)
            state.currentMenu=val
            let result=state.tabsList.findIndex(item=>item.name===val.name)
            result === -1 ? state.tabsList.push(val) : ''

           // if(val.name === 'home'){
           //     state.currentMenu=null
           // }else {
           //     state.currentMenu=val
           //     let result=state.tabsList.findIndex(item=>item.name===val.name)
           //     result === -1 ? state.tabsList.push(val) : ''
           // }
        },
        closeTab(state,val){
            let res=state.tabsList.findIndex(item=>item.name===val.name)
            state.tabsList.splice(res,1)
        }
    }
})

export default store