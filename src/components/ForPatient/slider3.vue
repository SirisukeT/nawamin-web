<template>
  <Carousel :items-to-show="3" id="hideArrowsExample" >
    <Slide v-for="slide in image" :key="slide">
      <div class="carousel__item_column"><img class="img3 mt-5" :src="slide.img" alt="">{{slide.name}}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import "./slider.css"
export default defineComponent({
  name: 'HiddenArrows',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      image: [
        { img: "/slide1.jpeg" ,name:"กิจกรรมที่ 1"},
        { img: "/slide2.png" ,name:"กิจกรรมที่ 2"},
        { img: "/slide3.jpg" ,name:"กิจกรรมที่ 3"},
        { img: "/slide1.jpeg" ,name:"กิจกรรมที่ 4"},
        { img: "/slide2.png" ,name:"กิจกรรมที่ 5"},
        { img: "/slide3.jpg" ,name:"กิจกรรมที่ 6"},
        { img: "/slide1.jpeg" ,name:"กิจกรรมที่ 7"},
        { img: "/slide2.png" ,name:"กิจกรรมที่ 8"},
        { img: "/slide3.jpg" ,name:"กิจกรรมที่ 9"},
      ],
    };
  },
});
</script>

<style>
#hideArrowsExample .carousel__prev--in-active,
#hideArrowsExample .carousel__next--in-active {
  display: none;
}

</style>