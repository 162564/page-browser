<template>
  <div>
    <div style="margin-left: 200px">
      <Button type="primary" @click="open" style="margin-left: 50px">打开</Button>
      <Button type="primary" @click="close" style="margin-left: 50px">关闭</Button>
      <Button type="primary" @click="download" style="margin-left: 50px">下载</Button>
      <Button type="primary" @click="remove" style="margin-left: 50px">删除</Button>
    </div>
    <div style="margin-top: -32px">
      <Upload :before-upload="handleUpload">
        <Button icon="ios-cloud-upload-outline">选择文件上传</Button>
      </Upload>
    </div>
    <div v-if="file !== null">{{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中……' : '上传' }}</Button></div>
  </div>
    <div v-if="show">
      <vue-office-pdf :src="pdf" @rendered="rendered"/>
    </div>
</template>

<script>
import axios from "axios";
import store from "../../../store/index.js";
import VueOfficePdf from '@vue-office/pdf'
export default {
  name: "StResume",
  components:{
    VueOfficePdf
  },
  data(){
    return{
      file: null,
      show: false,
      loadingStatus: false,
      user:{...store.getters["student/getUser"]},
      pdf:''
    }
  },
  methods:{
    open(){
      if(this.user.sid != undefined){
        this.pdf = `http://localhost:8080/student/downloadResume/${this.user.sid}`
        this.show = true
      }else {
        this.$Message.warning("打开文件失败！请检查你的信息是否正确！")
      }
    },
    close(){
      this.show = false
    },
    rendered(){
      console.log("渲染完成")
    },
    download(){
      window.location.href = `http://localhost:8080/student/downloadResume/${this.user.sid}`
    },
    remove(){
      let that = this
      axios.post(`http://localhost:8080/student/removeResume/${this.user.sid}`)
          .then(function (response) {
            if(response.data == true){
              that.$Message.success('删除成功')
              return
            }
            that.$Message.warning(response.data)
          })
          .catch(function (error) {
            // 处理错误情况
            that.$Message.warning('删除失败')
            console.log(error);
          })
    },
    handleUpload (file) {
      this.file = file;
      return false;
    },
    upload () {
      let that = this
      this.loadingStatus = true
      let forData = new FormData()
      forData.append('file',this.file)
      let url = `http://localhost:8080/student/uploadResume/${this.user.sid}`
      axios.post(url,forData)
          .then(function (response) {
            if(response.data == true){
              that.file = null;
              that.loadingStatus = false;
              that.$Message.success('上传成功')
            }
            // 处理成功情况
            console.log(response);
          })
          .catch(function (error) {
            // 处理错误情况
            that.loadingStatus = false;
            that.$Message.warning('上传失败')
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>