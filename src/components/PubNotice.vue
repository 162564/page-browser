<template>
  <Carousel autoplay style="height: 650px;width: 1412px">
    <CarouselItem v-for="item in image">
      <div class="demo-carousel"><img class="image" :src="item" alt=""/></div>
    </CarouselItem>
  </Carousel>
</template>

<script>

import {Carousel, CarouselItem} from "view-ui-plus";
import axios from "axios";

export default {
  name: "PubNotice",
  components: {CarouselItem, Carousel},
  data(){
    return{
      image:[]
    }
  },
  mounted() {
    let that = this
    let num = 1001
    for (let i = 0; i < 5; i++) {
      let url = 'http://localhost:8080/getImgById/'
      url = url + num++
      axios.get(url, {
        responseType:'blob'
        /*向后端服务器发送请求，携带数据*/
      }).then(
          function (response) {
            that.image[i] = URL.createObjectURL(response.data)
          }).catch(
          function (error) {
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>
.image{
  width: 100%;
  height: 650px;

}
</style>
