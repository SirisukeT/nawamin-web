<template>
  <div class="doctorbox">
    <h1><slot></slot></h1>
    <div class="subdocb">
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "GrayBox",
};
</script>

<style>
.doctorbox {
  width: 32%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
}

.doctorbox h1 {
  margin: 10px 0 8px 0;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
}

.subdocb {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 375px; */
  height: 60px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 10px;
  border: 1.75px solid black;
}

.subdocb input{
  border: 2px solid black;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
}
</style>
