<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <Menu active-name="1" theme="dark" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template #title>
          <Icon type="ios-school" />
          学校信息
        </template>
        <Submenu name="1-1">
          <template #title>
            <Icon type="md-briefcase" />
            计算机学院
          </template>
          <MenuItem name="1-1-1" @click="toMyForm('软件工程')">
            软件工程
          </MenuItem>
          <MenuItem name="1-1-2" @click="toMyForm('人工智能')">
            人工智能
          </MenuItem>
        </Submenu>

        <Submenu name="1-2">
          <template #title>
            <Icon type="ios-calculator"/>
            理学院
          </template>
          <MenuItem name="1-2-1" @click="toMyForm('信息与计算科学')">
            信息与计算科学
          </MenuItem>
          <MenuItem name="1-2-2" @click="toMyForm('统计学')">
            统计学
          </MenuItem>
        </Submenu>

        <Submenu name="1-3">
          <template #title>
            <Icon type="ios-appstore-outline"/>
            外语学院
          </template>
          <MenuItem name="1-3-1" @click="toMyForm('英语')">
            英语
          </MenuItem>
          <MenuItem name="1-3-2" @click="toMyForm('法语')">
            法语
          </MenuItem>
        </Submenu>
      </Submenu>

      <Submenu name="2">
        <template #title>
          <Icon type="ios-keypad"></Icon>
          企业信息
        </template>
        <MenuItem name="2-1" @click="toMyFormCompany('国企')">国企</MenuItem>
        <MenuItem name="2-2" @click="toMyFormCompany('民企')">民企</MenuItem>
        <MenuItem name="2-3" @click="toMyFormCompany('外企')">外企</MenuItem>
      </Submenu>

      <Submenu name="3">
        <template #title>
          <Icon type="ios-podium" />
            统计
        </template>
        <MenuItem name="3-1" @click="toMyReport('myReport')">学生就业信息统计</MenuItem>
      </Submenu>

      <Submenu name="4">
        <template #title>
          <Icon type="ios-people" />
          管理
        </template>
        <MenuItem name="4-1" @click="toMyAudit('myAudit')">企业招聘审核</MenuItem>
        <MenuItem name="4-2" @click="toMyNotice('myNotice')">公告</MenuItem>
      </Submenu>

    </Menu>
  </Sider>
</template>

<script>
import {MenuItem, Submenu} from "view-ui-plus";
import store from "../../store/index.js";
import {mapActions} from "vuex";

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
    },
    toMyAudit(myVal){
      store.commit({
        type:'school/changeMainByMyAudit',
        myVal,
      })
    },
    toMyNotice(myVal){
      store.commit({
        type:'school/changeMainByMyNotice',
        myVal,
      })
    }
  },
}
</script>

<style scoped>

</style>