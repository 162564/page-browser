<template>
  <div v-if="showWindow">
    <div class="modal-mask" @click="closeWin"></div>
    <div class="modal-wrapper">
      <div class="modal-container">
        <div style="text-align: center"><h1>通知</h1></div>
        <div></div>
        <div class="modal-footer">
          <h3>{{this.msg}}</h3>
          <Space direction="vertical" style="margin-top: 15px">
            <Space wrap>
              <Button type="primary" @click="closeWin" style="margin-left: 100px">确认</Button>
            </Space>
          </Space>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StMsg",
  props: {
    showWindow: Boolean,
    msg:String
  },
  methods:{
    closeWin() {
      this.$emit('closeWindow')
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