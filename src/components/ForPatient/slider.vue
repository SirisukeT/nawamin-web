<template>
  <Carousel
    :settings="settings"
    :autoplay="5000"
    :wrap-around="true"
    :breakpoints="breakpoints"
  >
    <Slide v-for="(item, index) in image" :key="index">
      <div class="carousel__item">
        <img class="img1" :src="item.img" alt=""/>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
// import "vue3-carousel/dist/carousel.css";
import "./slider.css"
export default defineComponent({
  name: "ExamplePagination",
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      image: [
        { img: "/slide1.jpeg" },
        { img: "/slide2.png" },
        { img: "/slide3.jpg" },
      ],
    };
  },
});
</script>
<style scoped>
/* @import url("./slider.css"); */
@import url("./slider2.css");
</style>
