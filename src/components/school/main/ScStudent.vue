<template>
  <div>
    <!--搜索框-->
    <Space direction="vertical" size="small" type="flex" style="margin-top: 3px;width: 300px">
      <Input @on-change="onSearch(content)" autofocus @on-clear="clearValue" clearable enter-button v-model="content" placeholder="输入内容……" />
    </Space>
  </div>
  <span>
     <Table highlight-row border :columns="studentCol" :data="showData" width="auto" style="margin-top: 1%;height: 520px"></Table>
      <Page :total="myData.length" page-size="10" :model-value="pageNum" @on-change="changePage" show-total style="margin-top: 3%;margin-right:10%;float: right" v-if="myData.length != 0"/>
  </span>
</template>

<script>

import {Space} from "view-ui-plus";
import axios from "axios";


export default {
  name: "ScForm",
  components: {Space},
  computed:{

  },
  data(){
    return {
      content:'',
      pageNum:1,
      showData:[],
      myData:[],
      sourceData:[],
      studentCol:[
        {
          title: '编号',
          key: 'sid',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:90
        },
        {
          title: '姓名',
          key: 'name',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:90
        },
        {
          title: '就业状态',
          key: 'state',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:100
        },
        {
          title: '联系方式',
          key: 'telephone',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:125
        },
        {
          title: '应聘岗位',
          key: 'target',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:125
        },
        {
          title: '年龄',
          key: 'age',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:70
        },
        {
          title: '性别',
          key: 'gender',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:70
        },
        {
          title: '地址',
          key: 'address',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:90
        },
        {
          title: '自我介绍',
          key: 'idea',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc'
        },
      ],
    }
  },
  methods:{
    onSearch(value){
      let myList = []
      let x = 0
      if(value !== ''){
        this.showData = []
        this.myData = []
        for (let i = 0; i < this.sourceData.length; i++) {
          myList = Object.keys(this.sourceData[i])
          for (let j = 0; j < myList.length; j++) {
            if(typeof(this.sourceData[i][myList[j]]) == 'string'){
              if (this.sourceData[i][myList[j]].indexOf(value) != -1) {
                this.myData[x++] = this.sourceData[i]
                break
              }
            }
            else if(typeof(this.sourceData[i][myList[j]]) == 'number'){
              if (this.sourceData[i][myList[j]].toString().indexOf(value) != -1) {
                this.myData[x++] = this.sourceData[i]
                break
              }
            }
          }
        }
      }
      this.changePage(this.pageNum)
    },
    clearValue(){
      this.myData = this.sourceData
      this.changePage(this.pageNum)
    },
    changePage(pageNum){
      let j = 0
      this.showData = []
      for (let i = (pageNum - 1) * 10; i < pageNum * 10; i++) {
        if (this.myData[i] == null) return
        this.showData[j++] = this.myData[i]
      }
    }
  },
  mounted(){
    let that = this
    axios.get(`http://localhost:8080/student/selectAll`).then(function (response) {
      that.sourceData = response.data
      that.myData = response.data
      for (let i = 0; i < 10; i++) {
        if (that.sourceData[i] == null) break
        that.showData[i] = that.sourceData[i]
      }
      console.log("学生")
      console.log(that.showData)
    }).catch(function (error){
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
