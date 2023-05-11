<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template #title>
          <Icon type="ios-school" />
          企业资料
        </template>
        <MenuItem name="1-1" @click="toMyMain('myInfo')">企业招聘信息</MenuItem>
      </Submenu>

      <Submenu name="2">
        <template #title>
          <Icon type="ios-keypad"></Icon>
          学生资料
        </template>
        <MenuItem name="2-1" @click="toMyMain('myApply')">应聘信息</MenuItem>
      </Submenu>

      <Submenu name="3">
        <template #title>
          <Icon type="ios-keypad"></Icon>
          员工资料
        </template>
        <MenuItem name="3-1" @click="toMyMain('myEmployee')">员工信息</MenuItem>
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
        type:'company/changeMain',
        myVal,
      })
    },
  },
}
</script>

<style scoped>

</style>