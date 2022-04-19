<script setup>
import TheLogin from "@/components/TheLogin.vue";
</script>

<!--
<template>
  <main>
    <TheWelcome />
  </main>
</template>-->

<template>
  <div class="home">
    <RouterLink to="/login" class="button">login</RouterLink>
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  methods:{
    
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  height: 100%;
  padding: 0;
}

div.home{
  height: 100%;
  margin: 50px;
  text-align: center;
}
.button{
  display: inline-block;
  vertical-align: middle;
  font-size: 100px;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}

</style>