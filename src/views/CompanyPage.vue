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
    <router-view></router-view>
    <Layout :style="{marginLeft: '200px'}">
<!--头部区域-->
      <ScHeader></ScHeader>
<!--内容展示区-->
      <ScMain></ScMain>
    </Layout>
  </div>
</template>
<script>
import ScGuide from "../components/school/ScGuide.vue";
import ScHeader from "../components/school/ScHeader.vue";
import ScMain from "../components/school/ScMain.vue";

export default {
  components: {ScMain, ScHeader, ScGuide}

}
</script>
