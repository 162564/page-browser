<template>
  <div v-if="showModal">
    <div class="modal-mask" @click="close"></div>
    <div class="modal-wrapper">
      <div class="modal-container">
        <div>
          姓名：<Input v-model="name" :placeholder="user.name" style="width: 300px;margin-top: 5px" /><br>
          性别：<Space direction="vertical" size="large" style="margin-top: 10px">
                  <RadioGroup v-model="gender">
                    <Radio label="男"></Radio>
                    <Radio label="女" style="margin-left: 50px"></Radio>
                  </RadioGroup>
                </Space><br>
          年龄：<Input v-model="age" :placeholder="user.age" style="width: 300px;margin-top: 10px" /><br>
          电话：<Input v-model="telephone" :placeholder="user.telephone" style="width: 300px;margin-top: 10px" /><br>
          住址：<Input v-model="address" :placeholder="user.address" style="width: 300px;margin-top: 10px" /><br>
          意向：<Input v-model="target" :placeholder="user.target" style="width: 300px;margin-top: 10px" /><br>
          介绍：<Input v-model="idea" :placeholder="user.idea" style="width: 300px;margin-top: 10px" /><br>
          就业：<Space direction="vertical" size="large" style="margin-top: 10px">
                  <RadioGroup v-model="state">
                    <Radio label="已就业"></Radio>
                    <Radio label="未就业" style="margin-left: 18px"></Radio>
                  </RadioGroup>
                </Space><br>
        </div>
        <div class="modal-footer">
          <Space direction="vertical" style="margin-top: 15px">
            <Space wrap>
              <Button type="primary" @click="affirm" style="margin-left: 80px">确认</Button>
              <Button type="primary" @click="close" style="margin-left: 50px">取消</Button>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../../../store/index.js";
import {Radio, RadioGroup} from "view-ui-plus";

export default {
  components: {RadioGroup, Radio},
  data(){
    return{
      name:'',
      gender:this.user.gender,
      username:'',
      password:'',
      age:'',
      company:'',
      telephone:'',
      address:'',
      target:'',
      idea:'',
      state:this.user.state,
      myUser:{...this.user}
    }
  },
  props: {
    showModal: Boolean,
    user:Object
  },
  methods: {
    reset(){
      this.name = ''
      this.age = ''
      this.company = ''
      this.telephone = ''
      this.address = ''
      this.target = ''
      this.idea = ''
    },
    close() {
      this.reset()
      this.gender = this.user.gender
      this.state = this.user.state
      this.$emit('closeModal');
    },
    affirm(){
      let that = this
      if(this.name != ''){
        this.myUser.name = this.name
      }
      if(this.gender != this.user.gender){
        this.myUser.gender = this.gender
      }
      if(this.state != this.user.state){
        this.myUser.state = this.state
      }
      if(this.age != ''){
        this.myUser.age = this.age
      }
      if(this.company != ''){
        this.myUser.company = this.company
      }
      if(this.telephone != ''){
        this.myUser.telephone = this.telephone
      }
      if(this.address != ''){
        this.myUser.address = this.address
      }
      if(this.target != ''){
        this.myUser.target = this.target
      }
      if(this.idea != ''){
        this.myUser.idea = this.idea
      }
      let url = `http://localhost:8080/student/updateInfo/${this.myUser.sid}/${this.myUser.name}/${this.myUser.gender}/${this.myUser.age}/${this.myUser.address}/${this.myUser.telephone}/${this.myUser.company}/${this.myUser.state}`
      axios.put(url)
          .then(function (response) {
            // 处理成功情况
            if (response.data = true){
              that.$Message.success("更新数据成功！")
              store.commit('student/bindUser',that.myUser)
            }
            console.log(response);
          })
          .catch(function (error) {
            // 处理错误情况
            that.$Message.warning("更新数据失败！请检查你的参数是否正确！")
            that.myUser.age = that.user.age
            console.log(error);
          })
      that.reset()
      this.$emit('closeModal');
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
}

.modal-container {
  background-color:white;
  padding:20px;
  min-width:300px;
  max-width:500px;
  border-radius:5px;
  box-shadow:3px 3px rgba(0,0,0,.3);
}
</style>