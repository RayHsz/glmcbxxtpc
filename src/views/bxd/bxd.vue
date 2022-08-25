<template>
  <div class="container">
    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-date-picker
          style="width:100%;"
          size="mini"
          v-model="value1"
          type="date"
          placeholder="开始日期"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions0"
      >
      </el-date-picker>
    </div>
    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-date-picker
          style="width:100%;"
          size="mini"
          v-model="value2"
          type="date"
          placeholder="结束日期"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions0"
      >
      </el-date-picker>
    </div>

    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
            style="width:100%;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
            style="width:100%;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
            style="width:100%;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
            style="width:100%;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="block" >
      <!--          style属性是用来缩小输入框的-->
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
            style="width:100%;"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>

  <div class="block" >
    <!--          style属性是用来缩小输入框的-->
    <el-input
        placeholder="报修单号"
        v-model="input"
        clearable>
    </el-input>
  </div>
  <div class="block1">
    <el-button type="primary" >主要按钮</el-button>
    <el-button type="success" >成功按钮</el-button>
    <el-button type="danger" disabled="true">危险按钮</el-button>

  </div>
  <div class="block2">
    <el-button type="danger">危险按钮</el-button>
  </div>
  <div style="width: 100%; text-align: center" class="tisi">
    <div >
      <el-tag type="danger"
      >某一项若不选择参数则默认查询该项所有数据
        <el-tag type="info" style="margin-right: -11px; margin-top: -2px"
        >若需要导出报修单，请「查看工单」然后点击「导出」按钮导出(报修单只有为已验收状态才能导出)</el-tag
        >
      </el-tag>
    </div>
  </div>

  <el-table
      :data="tableData"
      height="450"
      border
      style="width: 100%"
      class="biaoge">
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期5"
        width="500"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="110"
        align="center">
    </el-table-column>
    <el-table-column
        label="操作"
        width="200"
        align="center">
      <div>
        <el-button type="primary" class="anniu1">主要按钮</el-button>
        <el-button type="success" class="anniu1">成功按钮</el-button>
      </div>
        <el-button type="info" class="anniu1">信息按钮</el-button>
        <el-button type="warning" class="anniu1">警告按钮</el-button>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  name: "bxdBar",
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    };
  },

}
</script>


<style scoped>
.block{
  float: left;
  padding-right: 20px;
  padding-top: 20px;
  width: 140px;
}

.block1{
  float: left;
  padding-top: 20px;
}

.block2{
  float: left;
  padding-top: 20px;
  padding-left: 20px;
}
.tisi{
  float: left;
  padding-top: 50px;
  padding-left: 20px;
}

.biaoge{
  padding-top: 30px;
}

.anniu1{
  width: 70px;
}
</style>
