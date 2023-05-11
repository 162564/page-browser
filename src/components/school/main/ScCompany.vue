<template>
  <div>
    <!--搜索框-->
    <Space direction="vertical" size="small" type="flex" style="margin-top: 3px;width: 300px">
      <Input @on-change="onSearch(content)" autofocus @on-clear="clearValue" clearable enter-button v-model="content" placeholder="输入内容……" />
    </Space>
  </div>
  <span>
     <Table highlight-row border :columns="companyCol" :data="showData" width="auto" style="margin-top: 1%;height: 520px"></Table>
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
      companyCol:[
        {
          title: '编号',
          key: 'cid',
          tooltip:true,
          tooltipTheme:'light',
          sortType:'asc',
          width:90
        },
        {
          title: '公司名称',
          key: 'name',
          tooltip:true,
          tooltipTheme:'light',
          width:150
        },
        {
          title: '公司类型',
          key: 'companyType',
          tooltip:true,
          tooltipTheme:'light',
          width:95
        },
        {
          title: '薪资',
          key: 'salary',
          tooltip:true,
          tooltipTheme:'light',
          width:70
        },
        {
          title: '岗位',
          key: 'request',
          tooltip:true,
          tooltipTheme:'light',
          width: 130
        },
        {
          title: '负责人',
          key: 'principal',
          tooltip:true,
          tooltipTheme:'light',
          width:80
        },
        {
          title: '学历要求',
          key: 'scale',
          tooltip:true,
          tooltipTheme:'light',
          width: 95
        },
        {
          title: '起始时间',
          key: 'beginDate',
          tooltip:true,
          tooltipTheme:'light',
          width: 168
        },
        {
          title: '联系方式',
          key: 'telephone',
          tooltip:true,
          tooltipTheme:'light',
          width: 130
        },
        {
          title: '工作地点',
          key: 'address',
          tooltip:true,
          tooltipTheme:'light',
          width: 95
        },
        {
          title: '岗位要求',
          key: 'postIntroduce',
          tooltip:true,
          tooltipTheme:'light',
          width: 95
        },
        {
          title: '公司介绍',
          key: 'companyIntroduce',
          tooltip:true,
          tooltipTheme:'light'
        },
      ],
    }
  },
  methods:{
    changePage(pageNum){
      let j = 0
      this.showData = []
      for (let i = (pageNum - 1) * 10; i < pageNum * 10; i++) {
        if (this.myData[i] == null) return
        this.showData[j++] = this.myData[i]
      }
    },
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
  },
  mounted(){
    let that = this
    axios.get(`http://localhost:8080/company/selectAll`).then(function (response) {
      const df = new Intl.DateTimeFormat('zh-CN',{
        year:'numeric',
        month:'2-digit',
        day:'2-digit',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
      for (let i = 0; i < response.data.length; i++) {
        let newDate = new Date(response.data[i].beginDate)
        response.data[i].beginDate = df.format(newDate)
      }
      that.sourceData = response.data
      that.myData = response.data
      for (let i = 0; i < 10; i++) {
        if (that.sourceData[i] == null) break
        that.showData[i] = that.sourceData[i]
      }
      console.log("公司")
      console.log(that.showData)
    }).catch(function (error){
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
