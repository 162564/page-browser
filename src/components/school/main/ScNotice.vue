<template>
  <Carousel autoplay loop style="height: 650px">
    <CarouselItem>
      <div class="demo-carousel"><img src="../../../assets/img/轮播图1.jpeg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel"><img src="../../../assets/img/轮播图2.jpeg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel"><img src="../../../assets/img/轮播图3.jpeg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel"><img src="../../../assets/img/轮播图4.jpeg" alt=""></div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel"><img src="../../../assets/img/轮播图5.jpeg" alt=""></div>
    </CarouselItem>
  </Carousel>
</template>

<script>

import {Carousel, CarouselItem} from "view-ui-plus";

export default {
  name: "ScNotice",
  components: {CarouselItem, Carousel},

}
</script>

<style scoped>
img{

}
</style>