<template>
  <Carousel>
    <Slide v-for="item in image" :key="item">
      <div class="carousel__item">
        <img :src="item.img" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'slider3',
  components: {
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

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>