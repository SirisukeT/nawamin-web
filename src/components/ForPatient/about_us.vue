<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <div class="detailbox" id="headbox">
            <h2 class="headabout" id="head">ข้อมูลโรงพยาบาล</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
          </div>
          <div class="detailbox">
            <h2 class="headabout">ปรัชญาของโรงพยาบาล</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
          </div>
          <div class="detailbox">
            <h2 class="headabout">วิสัยทัศน์</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
          </div>
          <div class="detailbox">
            <h2 class="headabout">พันธกิจ</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
          </div>
          <div class="detailbox">
            <h2 class="headabout">นโยบายคุณภาพ</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
          </div>
          <div class="detailbox">
            <h2 class="headabout">นโยบายความปลอดภัย</h2>
            <p class="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              neque, beatae sapiente excepturi maiores laudantium explicabo
              suscipit blanditiis, molestias exercitationem aliquid a possimus.
              Reiciendis, porro ipsa corrupti fuga architecto perspiciatis.
            </p>
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
.headabout{
  font-size: 24px;
  font-weight: 700;
  color: #446A46;
}
p {
  font-size: 20px;
  font-weight: 700;
}
#head {
  padding-bottom: 6px;
  border-bottom: 3px solid black;
}
.mainbox {
  width: 80rem;
  padding-top: 10px;
  padding-bottom: 100px;
  /* background-color: wheat; */
}
#headbox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detailbox {
  display: flex;
  flex-direction: column;
}
</style>
