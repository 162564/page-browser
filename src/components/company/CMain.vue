<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Card>
      <template v-if="myStore === 'myInfo'">
        <CInfo></CInfo>
      </template>
      <template v-else-if="myStore === 'myRecruitInfo'">
        <CRecruitInfo></CRecruitInfo>
      </template>
      <template v-else-if="myStore === 'myApply'">
        <CApply></CApply>
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
import CInfo from "./main/CInfo.vue";
import CRecruitInfo from "./main/CRecruitInfo.vue";
import CApply from "./main/CApply.vue";


export default {
  name:'stMain',
  components: {CApply, CRecruitInfo, CInfo, PubNotice, Card, Content},
  data(){
    return{
    }
  },
  computed:{
    myStore(){
      return store.getters["company/getShowMain"]
    }
  }
}
</script>

<style scoped>

</style>