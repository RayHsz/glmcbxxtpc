<template>
  <el-aside :width="$store.state.isCollapse ? '180px' : '64px'">
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#9ea4b8"
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
        :collapse-transition="false"
    >

      <h3 v-show="$store.state.isCollapse">桂林医学院报修系统</h3>
      <el-image v-show="!$store.state.isCollapse" style="width: 76%; height: 46px" :src="require('../assets/glmc_logo.png')" :fit="contain" />
      <!--  <h3 v-show="!$store.state.isCollapse">GLMC</h3>-->

      <el-menu-item
          :index="item.path"
          v-for="item in noChildren()"
          :key="item.path"
          @click="clickMenu(item)"
      >

          <component class="icons" :is="item.icon"></component>&emsp;
          <span>{{item.label}}</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from "vuex";

export default {
  name: "CommonSide",
  setup(){
    const list= [
      {
        path:"/home",
        name:"首页",
        label:"首页",
        icon:"user",
        url:"UserManage/UserManage",
      },
      {
        path:"/qygl",
        name:"区域管理",
        label:"区域管理",
        icon:"position",
        url:"UserManage/UserManage",
      },
      {
        path:"/bxd",
        name:"报修单",
        label:"报修单",
        icon:"document",
        url:"UserManage/UserManage",
      },
      {
        path:"/jdr",
        name:"接单人",
        label:"接单人",
        icon:"user",
        url:"UserManage/UserManage",
      },
      {
        path:"/shy",
        name:"审核员",
        label:"审核员",
        icon:"sunrise",
        url:"UserManage/UserManage",
      },
      {
        path:"/hcgl",
        name:"耗材管理",
        label:"耗材管理",
        icon:"scissor",
        url:"UserManage/UserManage",
      }
    ]

    const router=useRouter()
    const store=useStore()
    const noChildren=()=>{
      return list.filter((item)=>!item.children)
    }

    const hasChildren=()=>{
      return list.filter((item)=>item.children)
    }
    const clickMenu = (item) => {
      router.push({
        name:item.name
      })
      store.commit("selectMenu",item)
    }
    return{
      noChildren,
      hasChildren,
      clickMenu
    }
  }
}
</script>

<style lang="less" scoped>
.icons{
  width: 18px;
  height: 18px;
}
.el-menu{
  border-right: none;
  h3{
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
.el-image{
  //调整一级菜单隐藏状态下logo显示的位置
  padding-left:12%;
  padding-top:7px;
}
</style>