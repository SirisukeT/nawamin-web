<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <h3>สถานะสุขภาพของคุณอยู่ในกลุ่มสี</h3>
            <div class="status">
              <h5>เสี่ยง</h5>
            </div>
            <h3 id="suggest">การปฏิบัติตัว</h3>
            <div class="suggestbox">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              eaque sunt ipsum id enim at architecto voluptate blanditiis
              corrupti minus. Similique adipisci consequatur quo ullam at
              veritatis maiores reprehenderit nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              eaque sunt ipsum id enim at architecto voluptate blanditiis
              corrupti minus. Similique adipisci consequatur quo ullam at
              veritatis maiores reprehenderit nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              eaque sunt ipsum id enim at architecto voluptate blanditiis
              corrupti minus. Similique adipisci consequatur quo ullam at
              veritatis maiores reprehenderit nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              eaque sunt ipsum id enim at architecto voluptate blanditiis
              corrupti minus. Similique adipisci consequatur quo ullam at
              veritatis maiores reprehenderit nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              eaque sunt ipsum id enim at architecto voluptate blanditiis
              corrupti minus. Similique adipisci consequatur quo ullam at
              veritatis maiores reprehenderit nisi?
            </p>
            <div class="row" id="toprow">
              <p class="datalist">เอ็กซเรย์ปอด</p>
              <div class="choicebox">
              <p class="datalist">ผิดปกติ</p>
              </div>
            </div>
            <div class="row">
              <p class="datalist">ผลตรวจฟัน</p>
              <div class="choicebox">
              <p class="datalist">ผิดปกติ</p>
              </div>
            </div>
            <div class="row">
              <p class="datalist">ผลตรวจสุขภาพจิต</p>
              <div class="choicebox">
              <p class="datalist">ผิดปกติ</p>
              </div>
            </div>
            <div class="row">
              <p class="datalist">ผลตรวจมะเร็งเต้านม</p>
              <div class="choicebox">
              <p class="datalist">ผิดปกติ</p>
              </div>
            </div>
            <div class="row">
              <p class="datalist">ผลตรวจภายใน</p>
              <div class="choicebox">
              <p class="datalist">ผิดปกติ</p>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#toprow{
  margin-top: 5%;
}
p{
  font-size: 20px;
}
.choicebox{
  width: auto;
  background: rgb(232, 230, 230);
  padding: 10px 40px 10px 10px;
  border-radius: 10px;
}
.datalist{
  width: 12rem;
  margin: 0;
  font-size: 20px;
}
.row{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.suggestbox{
    padding: 0 20px 40px 20px;
}
#suggest {
  text-align: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid;
}
h3 {
  margin-top: 10px;
}
h5 {
  margin: 0;
  color: white;
}
.status {
  margin-top: 10px;
  background: #ff7a00;
  width: 20%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-radius: 5px;
}
.mainbox {
  display: flex;
}
.detailbox {
  width: 62rem;
  /* background: wheat; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table {
  width: 100%;
  height: 40rem;
  background: #82a284;
  border-radius: 20px;
  margin-top: 30px;
}
</style>
