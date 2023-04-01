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
    <CGuide></CGuide>
    <Layout :style="{marginLeft: '200px'}">
      <!--头部区域-->
      <CHeader :style="{height:'20%'}"></CHeader>
      <!--内容展示区-->
      <CMain></CMain>
    </Layout>
  </div>
</template>
<script>
import CGuide from "../components/company/CGuide.vue";
import CHeader from "../components/company/CHeader.vue";
import CMain from "../components/company/CMain.vue";
import {Layout} from "view-ui-plus";

export default {
  name:'companyPage',
  components: {Layout, CMain, CHeader, CGuide}
}
</script>
