<template>
  <div class="common-layout">
    <el-container>
      <common-aside></common-aside>
      <el-container class="r-concent">
        <common-header></common-header>
        <!-- <common-tab></common-tab> -->
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonAside from "@/components/CommonAside";
//import CommonTab from "@/components/CommonTab";
export default {
  name: "MainBar",
  components:{
    CommonHeader,
    CommonAside,
   // CommonTab
  }
}
</script>

<style lang="less" scoped>
.el-container{
  flex-wrap: wrap;
  align-items: flex-start;
}
.common-layout{
  height: 100%;
  width: 100%;
  float: left;
  & > .el-container{
    height: 100%;
    width: 100%;
    float: left;
    & > .el-aside{
      height: 100%;
      background: #9ea4b8 ;
    }
    & > .el-container{
      width: 800px;
    }
  }
}
</style>