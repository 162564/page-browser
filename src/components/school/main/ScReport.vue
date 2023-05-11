<template>
<h1>就业人数：{{employment}}</h1><br><h1>未就业人数：{{underemployed}}</h1>
</template>

<script>
import axios from "axios";

export default {
  name: "ScReport",
  data(){
    return{
      underemployed:0,
      employment:0
    }
  },
  mounted() {
    let that = this
    axios.get(`http://localhost:8080/student/selectUnderemployed`).then(function (response) {
      that.underemployed = response.data
      console.log(response)
    })
    axios.get(`http://localhost:8080/student/selectEmployment`).then(function (response) {
      that.employment = response.data
      console.log(response)
    })
  }
}
</script>

<style scoped>

</style>