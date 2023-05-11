<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Card  style="height: 100%;width: 100%;margin-top: 20px">
      <template v-if="myStore === 'myInfo'">
        <StInfo></StInfo>
      </template>
      <template v-else-if="myStore === 'myResume'">
        <StResume></StResume>
      </template>
      <template v-else-if="myStore === 'myCompanyInfo'">
        <StCompanyInfo></StCompanyInfo>
      </template>
      <template v-else>
        <PubNotice></PubNotice>
      </template>
    </Card>
  </Content>
</template>

<script>

import store from "../../store/index.js";
import {Card, Content} from "view-ui-plus";
import PubNotice from "../PubNotice.vue";
import StResume from "./main/StResume.vue";
import StCompanyInfo from "./main/StForm.vue";
import StInfo from "./main/StInfo.vue";


export default {
  name:'stMain',
  components: {StInfo, StCompanyInfo,StResume, PubNotice, Card, Content},
  data(){
    return{
    }
  },
  computed:{
    myStore(){
      return store.getters["student/getShowMain"]
    }
  }
}
</script>

<style scoped>

</style>