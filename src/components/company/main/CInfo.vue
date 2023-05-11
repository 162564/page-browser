<template>
  <div>
    <div>
      <h1 style="text-align: center"> 公司信息</h1>
      <div style="margin-left: 1%">
        <h3>公司编号：{{user.cid}}</h3>
        <h3>公司名称：{{user.name}}</h3>
        <h3>公司领导：{{user.principal}}</h3>
        <h3>公司类型：{{user.companyType}}</h3>
        <h3>起始时间：{{beginDateForUpdate}}</h3>
        <h3>公司电话：{{user.telephone}}</h3>
        <h3>公司地址：{{user.address}}</h3>
        <h3>招聘岗位：{{user.request}}</h3>
        <h3>公司介绍：{{user.companyIntroduce}}</h3>
        <h3>岗位介绍：{{user.postIntroduce}}</h3>
        <h3>岗位薪资：{{user.salary}}</h3>
        <h3>学历要求：{{user.scale}}</h3>
      </div>
    </div>
    <Space direction="vertical" style="margin-left: 15px;margin-top: 15px">
      <Space wrap>
        <Button type="primary" @click="openModel">编辑</Button>
      </Space>
    </Space>
    <PopWindowForC
        @close-modal="closeModel"
        :user="user"
        :showModal="showModal"
    >
    </PopWindowForC>
  </div>
</template>

<script>
import PopWindow from "../../student/main/PopWindow.vue";
import store from "../../../store/index.js";
import PopWindowForC from "./PopWindowForC.vue";

export default {
  name: "CInfo",
  components:{PopWindowForC, PopWindow},
  data(){
    return{
      showModal:false,
    }
  },
  computed:{
    user(){
      return {...store.getters["company/getUser"]}
    },
    beginDateForUpdate(){
      const df = new Intl.DateTimeFormat('zh-CN',{
        year:'numeric',
        month:'2-digit',
        day:'2-digit',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
      })
      let newDate = new Date(this.user.beginDate)
      return df.format(newDate)
    }
  },
  methods:{
    openModel(){
      this.showModal = true
    },
    closeModel(){
      this.showModal = false
    }
  }
}
</script>

<style scoped>

</style>