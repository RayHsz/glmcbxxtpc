<template>
    <div class="tags">
      <el-tag
          :key="tag.name"
          v-for="(tag,index) in tags"
          :closable="tag.name!=='首页'"
          :disable-transitions="false"
          :effect="$route.name===tag.name ? 'dark':'plain' "
          @click="changeMenu(tag)"
          @close="handleClose(tag,index)"
      >
        {{tag.label}}
      </el-tag>
    </div>
</template>

<script>

import {useStore} from 'vuex'
import {useRoute, useRouter} from "vue-router";
export default {
  name: "CommonTab",
  setup(){
    const store=useStore()
    const router=useRouter()
    const route=useRoute()
    const tags=store.state.tabsList;
    console.log(tags)
    const changeMenu = (item) => {
        router.push({name:item.name})
    }
    const handleClose = (tag,index) => {
      let length=tags.length-1;
      store.commit("closeTab",tag)
      if(tag.name!==route.name){
          return;
      }
      if(index ===length){
        router.push({
          name:tags[index-1].name
        })
      }
    }
    return{
      tags,
      changeMenu,
      handleClose
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
.tags{
  padding: 20px;
  width: 100%;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>