<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>

<template>
  <div class="layout">
    <!--导航区-->
    <StGuide></StGuide>
    <Layout :style="{marginLeft: '200px'}">
      <!--头部区域-->
      <StHeader :style="{height:'20%'}"></StHeader>
      <!--内容展示区-->
      <StMain></StMain>
    </Layout>
  </div>
</template>
<script>
import StGuide from "../components/student/StGuide.vue";
import StMain from "../components/student/StMain.vue";
import StHeader from "../components/student/StHeader.vue";
import {Layout} from "view-ui-plus";

export default {
  name:'studentPage',
  components: {Layout, StHeader, StMain, StGuide}
}
</script>
