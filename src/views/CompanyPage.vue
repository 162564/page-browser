<template>
  <div class="layout">
    <!--导航区-->
    <CGuide></CGuide>
    <Layout :style="{marginLeft: '200px'}">
      <!--头部区域-->
      <CHeader :style="{height:'20%'}"></CHeader>
      <!--内容展示区-->
      <CMain></CMain>
    </Layout>
    <StMsg
        @close-window="closeWindow"
        :showWindow="showWindow"
        :msg="msg"
    ></StMsg>
  </div>
</template>
<script>
import CGuide from "../components/company/CGuide.vue";
import CHeader from "../components/company/CHeader.vue";
import CMain from "../components/company/CMain.vue";
import {Layout} from "view-ui-plus";
import store from "../store/index.js";
import axios from "axios";
import StMsg from "../components/student/main/StMsg.vue";

export default {
  name:'companyPage',
  components: {StMsg, Layout, CMain, CHeader, CGuide},
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
    let username = store.getters["company/getUsername"]
    let password = store.getters["company/getPassword"]
    let that = this
    axios.get(`http://localhost:8080/company/select/${username}/${password}`, {
      responseType:'json'
      /*向后端服务器发送请求，携带数据*/
    }).then(
        function (response) {
          store.commit('company/bindUser',response.data)
          if(response.data.msg != null){
            that.msg = response.data.msg
            console.log(response.data)
            that.showWindow = true
          }
        })
  }
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

