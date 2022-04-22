<template>
  <div class="leftbox">
    <div class="ppcolor">
      <div class="pp">
        <img src="../assets/user-regular.svg" alt="" />
      </div>
    </div>
    <div class="phptext">
      <h3>นายชอบ ไร้โรค</h3>
    </div>
  </div>
</template>

<script>
export default {
    name:"PatientCard",
};
</script>

<style>
.leftbox {
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  /* background-color: blue; */
}

.ppcolor {
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pp img {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}
</style>