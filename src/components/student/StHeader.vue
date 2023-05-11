<template>
  <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',height:'88px'}">
    <!--头像-->
    <Space size="large" wrap style="margin-top: 10px;margin-right: 2%;float: right">
      <Avatar style="color: blue;background-color: yellow">{{store.getters["student/getUser"].name}}</Avatar>
    </Space>
  </Header>
</template>

<script>

import store from "../../store/index.js";

export default {
  computed: {
    store() {
      return store
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>

</style>