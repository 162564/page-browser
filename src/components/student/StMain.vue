<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Card>
      <template v-if="myStore === 'myInfo'">
        <StInfo></StInfo>
      </template>
      <template v-else-if="myStore === 'myResume'">
        <StResume></StResume>
      </template>
      <template v-else-if="myStore === 'myWorkInfo'">
        <StWorkInfo></StWorkInfo>
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
import StWorkInfo from "./main/StWorkInfo.vue";
import StCompanyInfo from "./main/StCompanyInfo.vue";
import StInfo from "./main/StInfo.vue";


export default {
  name:'stMain',
  components: {StInfo, StCompanyInfo, StWorkInfo, StResume, PubNotice, Card, Content},
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