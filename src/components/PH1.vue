<template>
<div class="bigbox">
  <div class="leftbox">
      <div class="ppcolor">
        <div class="pp">
          <img src="../assets/user-regular.svg" alt="" />
        </div>
      </div>
      <div class="phptext">
        <h3>นายสมหมาย มิตรรัก</h3>
      </div>
  </div>
  <div class="rightbox">
      <h1 class="rb">ประวัติผู้ป่วย</h1>
      <div class="line"></div>
      <div class="historybox">
          <div class="boxin"></div>
      </div>
        
  </div>
</div>
</template>

<script>
export default {
  name: "PH1",
};
</script>

<style scoped>

.pp img{
  width: 170px;
  height: 170px;
  background-color: aqua;
  border-radius: 100%;
}
.ppcolor{
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
.phptext{
  margin-top: 20px;
  width: 100%;
  height: 100px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  text-align: center;
}
rb{
    margin: 0px;
    padding: 0px;
}

.bigbox{
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}
.leftbox{
    margin-left: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 600px;
    /* background-color: blue; */
}
.rightbox{
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 1000px;
    /* background-color: red; */
    justify-content: top;
    align-items: center;
}
.historybox{
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 800px;
  background-color: #c4c4c4;
  border-radius: 50px;
  border: 1.75px solid white;
}
.line {
  margin-top: 10px;
  width: 90%;
  height: 2px;
  background-color: black;
}
.boxin{
  margin: 20px;
  width: 100%;
  height: 760px;
  background-color: #e7e7e7;
  border-radius: 50px;
  border: 1.75px solid white;
}

</style>