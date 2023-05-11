<template>
  <div v-if="showWindow">
    <div class="modal-mask" @click="close"></div>
    <div class="modal-wrapper">
      <div class="modal-container">
        <div>
          <h3>ID：{{this.item.cid}}</h3>
          <h3>名称：{{this.item.name}}</h3>
          <h3>类型：{{this.item.companyType}}</h3>
          <h3>薪资：{{this.item.salary}}</h3>
          <h3>岗位：{{this.item.request}}</h3>
          <h3>负责人：{{this.item.principal}}</h3>
          <h3>学历要求：{{this.item.scale}}</h3>
          <h3>起始日期：{{this.item.beginDate}}</h3>
          <h3>联系电话：{{this.item.telephone}}</h3>
          <h3>工作地址：{{this.item.address}}</h3>
          <h3>岗位要求：{{this.item.postIntroduce}}</h3>
          <h3>公司介绍：{{this.item.companyIntroduce}}</h3>
        </div>
        <div class="modal-footer">
          <Space direction="vertical" style="margin-top: 15px">
            <Space wrap>
              <Button type="primary" @click="sendResume">投递简历</Button>
              <Button type="primary" @click="close" style="margin-left: 30px">取消</Button>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store/index.js";
import axios from "axios";

export default {
  name: "EditInfoWindow",
  data(){
    return{

    }
  },
  props: {
    showWindow: Boolean,
    item:Object
  },
  methods:{
    close() {
      this.$emit('closeWindow');
    },
    sendResume(){
      let sid = store.getters["student/getUser"].sid
      let cid = this.item.cid
      let that = this
      axios.post(`http://localhost:8080/company/sendResume/${sid}/${cid}`).then(function (response) {
          if (response.data){
            that.$Message.success('发送成功！')
          }else{
            that.$Message.warning(response.data)
          }
          that.close()
        })
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