<template>
  <div class="background-img">
    <div class="background-img3"></div>
    <div class="background-img4"></div>
    <div class="background-img2">
      <div class="demo-login">
        <Login @on-submit="handleSubmit">
          <UserName name="username"/>
          <Password name="password"  enter-to-submit/>
          <RadioGroup v-model="info" size="large"  style="margin-left: 15%">
            <Radio class="radio-size" label="学生"></Radio>
            <Radio class="radio-size" label="学校"></Radio>
              <Radio class="radio-size" label="企业"></Radio>
          </RadioGroup>
          <Submit style="margin-top: 5px"/>
        </Login>
      </div>
    </div>
  </div>
</template>

<script>

import {Login, Password, Radio, RadioGroup, Submit, UserName} from "view-ui-plus";
import store from "../store/index.js";
import axios from "axios";
import router from "../router/index.js";

export default {
  components: {Password, Login, RadioGroup, Submit, UserName, Radio},
  data () {
    return {
      info:'学生',
    }
  },
  methods: {
    handleSubmit (valid,{username,password}){
      let info = this.info
      let obj = {username,password,info}
      store.commit('school/bindUserInfo',obj)
      if (valid) {
        /*根据info类型，跳转*/
        axios.get('/', {
          /*向后端服务器发送请求，携带数据*/
          params: {
            username,password,info
          }
        }).then(
            function (response) {
              console.log(response);
            }).catch(
                function (error) {
                  console.log(error);
        }).then(function () {
          if (info === '学生'){
            router.push('/studentPage')
          }else if (info === "学校"){
            router.push('/schoolPage')
          }else if (info === '企业'){
            router.push('/companyPage')
          }
        });
      }
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.radio-size{
  color: blue;
}

.background-img {
  background-image: url("src/assets/img/background.jpeg") ;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;

}

.background-img2{
  position: absolute;
  margin-top: 20%;
  margin-left: 30%;
  height: 35%;
  width: 40%;
}

.background-img3{
  background-image: url("src/assets/img/校徽图.png");
  background-size: cover;
  position: absolute;
  margin-left: 2%;
  margin-top: 2%;
  height: 13%;
  width: 7%;
}
.background-img4{
  background-image: url("src/assets/img/欢迎词.png");
  background-size: cover;
  position: absolute;
  margin-left: 24%;
  margin-top: 4%;
  height: 10%;
  width: 52%;
}

.demo-login {
  position: absolute;
  margin-left: 30%;
  margin-top: 8%;
  height: 20%;
  width: 40%;
}
</style>