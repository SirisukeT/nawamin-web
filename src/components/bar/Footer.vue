<template>
  <div class="container">
    <div class="row">
      <div class="logobox">
        <router-link :to="'/Overall'">
          <img
            id="logo"
            src="@/assets/logo_re.png"
            alt=""
            width="70"
            height="70"
            class="d-inline-block align-text-top"
        />
        </router-link>
        <p id="logotext">โรงพยาบาลค่ายนวมินทราชินี</p>
      </div>
      <div class="contentbox">
        <h5 id="headtext">Contacts</h5>
        <p id="text">หมู่ที่ 9 301 ตำบล บ้านสวน อำเภอเมืองชลบุรี ชลบุรี 20000</p>
        <p id="text">038-273034</p>
        <p id="text">033-039621</p>
      </div>
      <div class="contentbox">
        <h5 id="headtext">เกี่ยวกับเรา</h5>
        <router-link to="/" id="text">ข้อมูลโรงพยาบาล</router-link>
        <router-link to="/" id="text">ติดต่อเรา</router-link>
      </div>
      <div class="contentbox">
        <h5 id="headtext">สำหรับเจ้าหน้าที่</h5>
        <router-link to="/" id="text">สำหรับแพทย์ผู้รักษา</router-link>
        <router-link to="/" id="text">สำหรับผู้ดูแลระบบ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#logotext{
  color: white;
  text-decoration:none;
  font-weight: 1000; 
  font-size:16px ;
  margin: 0;
}
#headtext{
  color: white;
  text-decoration:none;
  font-weight: 1000; 
}
#text{
  color: white;
  text-decoration:none;
  font-weight: 300;
  margin-bottom: 8px; 
}
.container {
  padding: 48px 12px 108px 12px;
  background: #446A46;
  width: 80rem;
  height: 20%;
  /* margin: 0; */
}
.contentbox{
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}
.logobox{
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
