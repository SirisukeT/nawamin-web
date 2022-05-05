<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <slider />
      </div>
    </section>
    <section class="module">
      <div class="module__content">
        <div class="container">
          <h2>
            <img src="@/assets/star.png" alt="" />
            ภาพกิจกรรม
            <img src="@/assets/star.png" alt="" />
          </h2>
          <div class="containter__event">
              <h1>event</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="module">
      <div class="module__content">
        <div class="container">
          <h2>
            <img src="@/assets/star.png" alt="" />
            ศูนย์ความรู้
            <img src="@/assets/star.png" alt="" />
          </h2>
          <div class="containter__knowledge">
              <slider3/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import slider3 from "./slider3.vue";
import slider from "./slider.vue";
export default {
  components: { slider,slider3 },
};
</script>

<style>
.content {
  box-sizing: border-box;
  margin: 0 auto;
}

.content * {
  box-sizing: inherit;
}

.module {
  margin: 0 auto;
  background-color: white;
  border: 1px solid;
}

.module__content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: #cddad7;
}

.module__content img {
  max-width: 78rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
</style>