<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Card style="height: 698px">
      <template v-if="myStore === 'myStudent' || myStore === 'myCompany'">
        <ScForm></ScForm>
      </template>
      <template v-else-if="myStore === 'myCompany'">
        <h1>dadasadadsa</h1>
      </template>
      <template v-else>
        <h1>其他页面</h1>
      </template>
    </Card>
  </Content>
</template>

<script>

import store from "../../store/index.js";
import ScForm from "./main/ScForm.vue";


export default {
  components: {ScForm},
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