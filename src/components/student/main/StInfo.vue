<template>
  <div>
    <div>
      <h1 style="text-align: center">个人信息</h1>
      <div style="margin-left: 1%">
        <h3>学号：{{user.sid}}</h3>
        <h3>姓名：{{user.name}}</h3>
        <h3>性别：{{user.gender}}</h3>
        <h3>年龄：{{user.age}}</h3>
        <h3>电话：{{user.telephone}}</h3>
        <h3>住址：{{user.address}}</h3>
        <h3>意向：{{user.target}}</h3>
        <h3>介绍：{{user.idea}}</h3>
        <h3>就业：{{user.state}}</h3>
      </div>
    </div>
    <Space direction="vertical" style="margin-left: 15px;margin-top: 15px">
      <Space wrap>
        <Button type="primary" @click="openModel">编辑</Button>
      </Space>
    </Space>
    <PopWindow
        @close-modal="closeModel"
        :user="user"
        :showModal="showModal"
    >
    </PopWindow>
    </div>
</template>

<script>
import store from "../../../store/index.js";
import PopWindow from "./PopWindow.vue";

export default {
  name: "StInfo",
  components:{PopWindow},
  data(){
    return{
      showModal:false,
    }
  },
  computed:{
    user(){
      return {...store.getters["student/getUser"]}
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
