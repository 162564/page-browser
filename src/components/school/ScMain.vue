<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Card>
      <template v-if="myStore === 'myStudent' || myStore === 'myCompany'">
        <ScForm></ScForm>
      </template>
      <template v-else-if="myStore === 'myReport'">
        <ScReport></ScReport>
      </template>
      <template v-else-if="myStore === 'myAudit'">
        <ScAudit></ScAudit>
      </template>
      <template v-else-if="myStore === 'myNotice'">
        <ScNotice></ScNotice>
      </template>
      <template v-else>
        <PubNotice></PubNotice>
      </template>
    </Card>
  </Content>
</template>

<script>

import store from "../../store/index.js";
import ScForm from "./main/ScForm.vue";
import ScReport from "./main/ScReport.vue";
import ScAudit from "./main/ScAudit.vue";
import ScNotice from "./main/ScNotice.vue";
import {Card, Content} from "view-ui-plus";
import PubNotice from "../PubNotice.vue";


export default {
  components: {PubNotice, Card, Content, ScNotice, ScAudit, ScReport, ScForm},
  data(){
    return{
    }
  },
  computed:{
    myStore(){
      return store.getters["school/getMyContextType"]
    }
  }
}
</script>

<style scoped>

</style>