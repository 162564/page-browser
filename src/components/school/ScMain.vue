<template>
  <Content :style="{padding: '0 16px 16px'}" style="margin-top: 20px">
    <Card>
      <template v-if="myStore === 'myStudent'">
        <ScStudent></ScStudent>
      </template>
      <template v-else-if="myStore === 'myCompany'">
        <ScCompany></ScCompany>
      </template>
      <template v-else-if="myStore === 'myReport'">
        <ScReport></ScReport>
      </template>
      <template v-else>
        <PubNotice></PubNotice>
      </template>
    </Card>
  </Content>
</template>

<script>

import store from "../../store/index.js";
import ScReport from "./main/ScReport.vue";
import {Card, Content} from "view-ui-plus";
import PubNotice from "../PubNotice.vue";
import ScStudent from "./main/ScStudent.vue";
import ScCompany from "./main/ScCompany.vue";


export default {
  components: {ScCompany, ScStudent, PubNotice, Card, Content,ScReport},
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