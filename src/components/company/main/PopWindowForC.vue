<template>
  <div v-if="showModal">
    <div class="modal-mask" @click="close"></div>
    <div class="modal-wrapper">
      <div class="modal-container">
        <div>
          公司名称：<Input v-model="name" :placeholder="user.name" style="width: 300px;margin-top: 5px" /><br>
          公司类型：<Space direction="vertical" size="large" style="margin-top: 10px">
          <RadioGroup v-model="companyType">
            <Radio label="国有企业"></Radio>
            <Radio label="民营企业" style="margin-left: 20px"></Radio>
            <Radio label="外资企业" style="margin-left: 20px"></Radio>
          </RadioGroup>
        </Space><br>
          公司领导：<Input v-model="principal" :placeholder="user.principal" style="width: 300px;margin-top: 10px" /><br>
          招聘岗位：<Input v-model="request" :placeholder="user.request" style="width: 300px;margin-top: 10px" /><br>
          公司电话：<Input v-model="telephone" :placeholder="user.telephone" style="width: 300px;margin-top: 10px" /><br>
          岗位薪资：<Input v-model="salary" :placeholder="user.salary" style="width: 300px;margin-top: 10px" /><br>
          学历要求：<Input v-model="scale" :placeholder="user.scale" style="width: 300px;margin-top: 10px" /><br>
          公司地址：<Input v-model="address" :placeholder="user.address" style="width: 300px;margin-top: 10px" /><br>
          起始时间：<Space size="small" wrap style="margin-top: 10px">
            <DatePicker type="date" :placeholder="getDate" @on-change="myDate" style="width: 120px" />
            <TimePicker type="time" :placeholder="getTime" @on-change="myTime" style="width: 120px" />
          </Space><br>
          岗位介绍：<Input v-model="postIntroduce" :placeholder="user.postIntroduce" style="width: 300px;margin-top: 10px" /><br>
          公司介绍：<Input v-model="companyIntroduce" :placeholder="user.companyIntroduce" style="width: 300px;margin-top: 10px" /><br>
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

export default {
  name: "PopWindowForC",
  data(){
    return{
      name:'',
      principal:'',
      telephone:'',
      address:'',
      request:'',
      companyIntroduce:'',
      postIntroduce:'',
      salary:'',
      scale:'',
      myUser:{...this.user},
      dateFun:'',
      timeFun:'',
      companyType:this.user.companyType
    }
  },
  props: {
    showModal: Boolean,
    user:Object
  },
  computed:{
    unitDate(){
      let myDate = new Date()
      let that = this
      if(this.dateFun == '' && this.timeFun == '') {
        myDate = new Date(that.user.beginDate)
        return myDate.getTime()
      }
      myDate = new Date(this.dateFun + ' ' + this.timeFun)
      return myDate.getTime()
    },
    getDate(){
      let date = new Date(this.myUser.beginDate)
      return date.getFullYear() +'/'+ (date.getMonth()+1) +'/'+ date.getDate()
    },
    getTime(){
      let date = new Date(this.myUser.beginDate)
      return date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds()
    }
  },
  methods: {
    myDate(date){
      this.dateFun = date
    },
    myTime(time){
      this.timeFun = time
    },
    reset(){
      this.name = ''
      this.principal = ''
      this.telephone = ''
      this.address = ''
      this.request = ''
      this.companyIntroduce = ''
      this.postIntroduce = ''
      this.salary = ''
      this.scale = ''
    },
    close() {
      this.reset()
      this.companyType = this.user.companyType
      this.$emit('closeModal');
    },
    affirm(){
      let that = this
      if(this.name != ''){
        this.myUser.name = this.name
      }
      if(this.companyType != this.user.companyType){
        this.myUser.companyType = this.companyType
      }
      if(this.principal != ''){
        this.myUser.principal = this.principal
      }
      if(this.request != ''){
        this.myUser.request = this.request
      }
      if(this.telephone != ''){
        this.myUser.telephone = this.telephone
      }
      if(this.salary != ''){
        this.myUser.salary = this.salary
      }
      if(this.request != ''){
        this.myUser.request = this.request
      }
      if(this.scale != ''){
        this.myUser.scale = this.scale
      }
      if(this.address != ''){
        this.myUser.address = this.address
      }
      if(this.postIntroduce != ''){
        this.myUser.postIntroduce = this.postIntroduce
      }
      if(this.companyIntroduce != ''){
        this.myUser.companyIntroduce = this.companyIntroduce
      }
      let url = `http://localhost:8080/company/updateInfo/${this.myUser.cid}/${this.myUser.name}/${this.myUser.companyType}/${this.myUser.principal}/${this.myUser.request}/${this.myUser.telephone}/${this.myUser.salary}/${this.myUser.scale}/${this.myUser.address}/${this.myUser.postIntroduce}/${this.myUser.companyIntroduce}/${this.unitDate}`
      axios.put(url)
          .then(function (response) {
            // 处理成功情况
            if (response.data = true){
              that.$Message.success("更新数据成功！")
              that.myUser.beginDate = new Date(that.unitDate)
              store.commit('company/bindUser',that.myUser)
            }
          })
          .catch(function (error) {
            // 处理错误情况
            that.$Message.warning("更新数据失败！请检查你的参数是否正确！")
            that.companyType = that.user.companyType
            console.log(error);
          })
      that.reset()
      this.$emit('closeModal');
    }
  }
}
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