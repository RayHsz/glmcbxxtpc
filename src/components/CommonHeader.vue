<template>
  <el-header>
    <div class="l-concent">
      <!-- 增加该div块主要用于控制一级菜单显示隐藏时，折叠与展开图标的切换 -->
      <div @click="this.showArrow = !this.showArrow">
        <el-button @click="handleCollapse">
          <el-icon :size="20">
            <ArrowLeft v-show="showArrow"></ArrowLeft>
            <ArrowRight v-show="!showArrow"></ArrowRight>
          </el-icon>
        </el-button>
      </div>

      <el-breadcrumb >
        <!-- 顶部动态标签 -->
        <common-tab></common-tab>
      </el-breadcrumb>

    </div>
    <div class="r-concent">
      <el-dropdown>
        <span class="el-dropdown-link">
            <img class="user" :src="imgSrc" alt="">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from "vue";
import CommonTab from "@/components/CommonTab";

export default {
  name: "CommonHeader",
  components:{
    CommonTab
  },
  data(){
    return{
      showArrow:true
    }
  },
  setup(){
    let store=useStore()
    const imgSrc=require('../assets/logo.jpg')

    let handleCollapse= ()=>{
        store.commit("updateIsCollapse")
    }

    const current = computed(()=>{
      return store.state.currentMenu
    })
    return{
      imgSrc,
      handleCollapse,
      current
    }
  }
}
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #f1f2e5;
}
.r-concent{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-concent{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
  h3{
    color: #fff;
  }
}
</style>