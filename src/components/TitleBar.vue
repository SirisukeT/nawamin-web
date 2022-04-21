<template>
  <div class="titleBar">
    <div class="icon"><img src="../assets/play-solid.svg" alt="" height="30"/></div>
    <p v-if="Title">{{Title}}</p>
    <p v-else>ภาพรวมระบบ</p>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  data(){
    return{
    }
  },
  props:["Title"]
  
};
</script>
<style scoped>
.titleBar {
  background-image: linear-gradient(
    to right,
    rgb(37, 149, 122),
    rgb(129, 187, 173)
  );
  border-radius: 20px;
  height: 60px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
}

.titleBar p{
    height: 100%;
    padding-top: 4px;
    margin:0;
    font-size: 30px;
}

.icon{
    display: flex;
    margin: 0 20px;
}
</style>