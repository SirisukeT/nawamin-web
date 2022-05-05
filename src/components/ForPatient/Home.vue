<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <img src="@/assets/img_001.png" alt="" />
      </div>
    </section>
    <section class="module">
      <div class="module__content">
        <div class="container"><h2>ภาพกิจกรรม</h2></div>
      </div>
    </section>
    <section class="module">
      <div class="module__content">
        <div class="container"><h2>ศูนย์ความรู้</h2></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
  /* background-color: #999; */
}

.module__content img {
  max-width: 78rem;
}
</style>