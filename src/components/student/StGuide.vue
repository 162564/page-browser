<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template #title>
          <Icon type="ios-school" />
          学生信息
        </template>
        <MenuItem name="1-1" @click="toMyMain('myInfo')">个人资料</MenuItem>
        <MenuItem name="1-2" @click="toMyMain('myResume')">简历</MenuItem>
      </Submenu>

      <Submenu name="2">
        <template #title>
          <Icon type="ios-keypad"></Icon>
          企业资料
        </template>
        <MenuItem name="2-1" @click="toMyMain('myCompanyInfo')">招聘信息</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
import {MenuItem, Submenu} from "view-ui-plus";
import store from "../../store/index.js";

export default {
  components: {MenuItem, Submenu},
  data(){
    return{
    }
  },
  methods:{
    toMyMain(myVal){
      store.commit({
        type:'student/changeMain',
        myVal,
      })
    },
  },
}
</script>

<style scoped>

</style>