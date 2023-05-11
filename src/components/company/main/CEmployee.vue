<template>
  <div>
    <div>
      <!--搜索框-->
      <Space direction="vertical" size="small" type="flex" style="margin-top: 3px;width: 300px">
        <Input @on-change="onSearch(content)" autofocus @on-clear="clearValue" clearable enter-button v-model="content" placeholder="输入内容……" />
      </Space>
    </div>
    <div style="margin-left: 320px;margin-top: -31px">
      <Select v-model="model" clearable @on-clear="clearModel" @on-change="onSearch(content)" style="width:200px">
        <Option v-for="item in companyCol" :value="item.key">{{ item.title }}</Option>
      </Select>
    </div>
    <div style="margin-top: -32px">
      <Space wrap style="margin-left: 550px;">
        <Button type="primary" @click="applyEmployee">解雇</Button>
      </Space>
    </div>
    <span>
     <Table highlight-row border @on-row-click="getItem" :columns="companyCol" :data="showData" width="auto" style="margin-top: 1%;height: 520px"></Table>
      <Page :total="myData.length" page-size="10" :model-value="pageNum" @on-change="changePage" show-total style="margin-top: 3%;margin-right:10%;float: right" v-if="myData.length !== 0"/>
  </span>
  </div>
</template>

<script>
import {Page, Space} from "view-ui-plus";
import axios from "axios";
import store from "../../../store/index.js";

export default {
  name: "CEmployee",
  components: {Page, Space},
  data(){
    return {
      user:store.getters["company/getUser"],
      model:'',
      content:'',
      item:{},
      pageNum:1,
      showData:[],
      myData:[],
      sourceData:[],
      companyCol:[
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
      ]
    }
  },
  methods: {
    sendRes(){
      let that = this
      setTimeout(function () {
        let replace = []
        axios.get(`http://localhost:8080/company/selectAllEmployee/${that.user.cid}`).then(function (response) {
          for (let i = 0; i < response.data.length; i++) {
            if(response.data[i+1] === undefined)break
            replace[i] = response.data[i+1]
          }
          that.sourceData = replace
          that.myData = replace
          that.showData = []
          for (let i = 0; i < 10; i++) {
            if (that.sourceData[i] == null) return
            that.showData[i] = that.sourceData[i]
          }
        }).catch(function (error){
          console.log(error)
        })
      },100)
    },
    applyEmployee(){
      let that = this
      if(this.item.sid === undefined) {
        this.$Message.warning("请先选择！")
        return
      }
      axios.put(`http://localhost:8080/company/puaEmployee/${that.user.cid}/${this.item.sid}`).then(function (response) {
        if(response.data === true){
          that.$Message.success("解雇成功！")
          that.sendRes()
          console.log(response)
        }else {
          that.$Message.warning(response.data)
        }
      }).catch(function (error){
        console.log(error)
      })
    },
    onSearch(value){
      let myList = []
      let x = 0
      if(this.model === undefined) this.model = ''
      if(value !== ''){
        this.showData = []
        this.myData = []
        if(this.model === ''){
          for (let i = 0; i < this.sourceData.length; i++) {
            myList = Object.keys(this.sourceData[i])
            for (let j = 0; j < myList.length; j++) {
              if(typeof(this.sourceData[i][myList[j]]) == 'string'){
                if (this.sourceData[i][myList[j]].indexOf(value) !== -1) {
                  this.myData[x++] = this.sourceData[i]
                  break
                }
              }
              else if(typeof(this.sourceData[i][myList[j]]) == 'number'){
                if (this.sourceData[i][myList[j]].toString().indexOf(value) !== -1) {
                  this.myData[x++] = this.sourceData[i]
                  break
                }
              }
            }
          }
        }
        else{
          for (let i = 0; i < this.sourceData.length; i++) {
            if(typeof(this.sourceData[i][this.model]) == 'string'){
              if (this.sourceData[i][this.model].indexOf(value) !== -1) {
                this.myData[x++] = this.sourceData[i]
              }
            }
            else if(typeof(this.sourceData[i][this.model]) == 'number'){
              if (this.sourceData[i][this.model].toString().indexOf(value) !== -1) {
                this.myData[x++] = this.sourceData[i]
              }
            }
          }
        }
      }
    },
    clearModel(){
      this.model = ''
    },
    clearValue(){
      this.myData = this.sourceData
      this.changePage(this.pageNum)
    },
    getItem(item){
      this.item = item
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
    let replace = []
    axios.get(`http://localhost:8080/company/selectAllEmployee/${that.user.cid}`).then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        if(response.data[i+1] === undefined)break
        replace[i] = response.data[i+1]
      }
      that.sourceData = replace
      that.myData = replace
      console.log(replace)
      for (let i = 0; i < 10; i++) {
        if (that.sourceData[i] == null) return
        that.showData[i] = that.sourceData[i]
      }
    }).catch(function (error){
      console.log(error)
    })
  },
}

</script>

<style scoped>

</style>