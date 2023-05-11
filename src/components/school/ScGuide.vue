<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template #title>
          <Icon type="ios-school" />
          学校信息
        </template>
        <MenuItem name="1-1-1" @click="toMyForm('myStudent')">
          学生资料
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template #title>
          <Icon type="ios-keypad"></Icon>
          企业信息
        </template>
        <MenuItem name="2-1" @click="toMyFormCompany('myCompany')">企业资料</MenuItem>

      </Submenu>

      <Submenu name="3">
        <template #title>
          <Icon type="ios-podium" />
            统计
        </template>
        <MenuItem name="3-1" @click="toMyReport('myReport')">学生就业信息统计</MenuItem>
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
    toMyForm(myVal){
      store.commit({
        type:'school/changeMain',
        myVal,
        myStudent:'myStudent',
      })
    },
    toMyFormCompany(myVal){
      store.commit({
        type:'school/changeMainCompany',
        myVal,
        myCompany:'myCompany',
      })
    },
    toMyReport(myVal){
      store.commit({
        type:'school/changeMainByMyReport',
        myVal,
      })
    }
  },
}
</script>

<style scoped>

</style>