<template>
  <div class="layout">
    <!--导航区-->
    <StGuide></StGuide>
    <Layout :style="{marginLeft: '200px'}">
      <!--头部区域-->
      <StHeader :style="{height:'20%'}"></StHeader>
      <!--内容展示区-->
      <StMain></StMain>
    </Layout>
    <div>
      <StMsg
          @close-window="closeWindow"
          :showWindow="showWindow"
          :msg="msg"
      ></StMsg>
    </div>
  </div>
</template>
<script>
import StGuide from "../components/student/StGuide.vue";
import StMain from "../components/student/StMain.vue";
import StHeader from "../components/student/StHeader.vue";
import {Layout} from "view-ui-plus";
import store from "../store/index.js";
import axios from "axios";
import StMsg from "../components/student/main/StMsg.vue";

export default {
  name:'studentPage',
  components: {StMsg, Layout, StHeader, StMain, StGuide},
  data(){
    return{
      msg:'',
      showWindow:false
    }
  },
  methods:{
    closeWindow(){
      this.showWindow = false
    }
  },
  mounted() {
    let username = store.getters["student/getUsername"]
    let password = store.getters["student/getPassword"]
    axios.get(`http://localhost:8080/student/select/${username}/${password}`, {
      responseType:'json'
      /*向后端服务器发送请求，携带数据*/
    }).then(
        function (response) {
          store.commit('student/bindUser',response.data)
        })
    let that = this
    setTimeout(function () {
      axios.get(`http://localhost:8080/student/selectNotice/${store.getters["student/getUser"].sid}`
      ).then(
          function (response) {
            that.msg = response.data
            that.showWindow = true
          })
    },1000)
  },
}
</script>
<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

