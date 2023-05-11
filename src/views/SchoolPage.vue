<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

<template>
  <div class="layout">
<!--导航区-->
    <ScGuide></ScGuide>
    <Layout :style="{marginLeft: '200px'}">
<!--头部区域-->
      <ScHeader :style="{height:'20%'}"></ScHeader>
<!--内容展示区-->
      <ScMain></ScMain>
    </Layout>
    <StMsg
        @close-window="closeWindow"
        :showWindow="showWindow"
        :msg="msg"
    ></StMsg>
  </div>
</template>
<script>
import ScGuide from "../components/school/ScGuide.vue";
import ScHeader from "../components/school/ScHeader.vue";
import ScMain from "../components/school/ScMain.vue";
import {Layout} from "view-ui-plus";
import store from "../store/index.js";
import axios from "axios";
import StMsg from "../components/student/main/StMsg.vue";

export default {
  components: {StMsg, Layout, ScMain, ScHeader, ScGuide},
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
    let username = store.getters["school/getUsername"]
    let password = store.getters["school/getPassword"]
    let that = this
    axios.get(`http://localhost:8080/school/select/${username}/${password}`, {
      responseType:'json'
      /*向后端服务器发送请求，携带数据*/
    }).then(
        function (response) {
          store.commit('school/bindUser',response.data)
          if(response.data.msg != null){
            that.ms = response.data.msg
            this.showWindow = true
          }
        })
  },
}
</script>
