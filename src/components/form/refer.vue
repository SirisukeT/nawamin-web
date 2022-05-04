<template>
  <div class="rightbox">
      <div class="historybox">
        <div class="box111">
          <div class="inputbox">
            <h5>เลขที่ใบส่งตัว</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>วันที่</h5>
            <input type="text" name="testdate5" id="testdate5" value="">    
          </div>
          <div class="inputbox">
            <h5>แผนก</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in departs" :key="index" value="">
                  {{ item.shortname }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>จากโรงพยาบาล</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in departs" :key="index" value="">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="inputbox">
            <h5>เบอร์โทรศัพท์</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>ถึงโรงพยาบาล</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in departs" :key="index" value="">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>ชื่อ - สกุลผู้ป่วย</h5>
            <input type="text" id="name"/>
          </div>
          <div class="inputbox">
            <h5>เลขบัตรประชาชน</h5>
            <input type="text" id="cid" />
          </div>
          <div class="inputbox">
            <h5>เพศ</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in sex" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>อายุ (ปี)</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>บ้านเลขที่</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>หมู่บ้าน</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>หมู่ที่</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>ตำบล</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>อำเภอ</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>จังหวัด</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox">
            <h5>เหตุผลการส่งตัว</h5>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="historybox2">
        <div class="box3">
          <div class="inputbox">
            <h5>1. ประวัติการป่วยในอดีตและประวัติครอบครัว</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox">
            <h5>2. ประวัติการป่วยปัจจุบัน</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>3. ผลการตรวจชันสูตรทางห้องทดลองที่สำคัญ</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>4. ผลการวินิจฉัยโรคชั้นต้น</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>5. การรักษาหรือยาที่ได้ให้ไว้แล้ว</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>6. สาเหตุที่ส่ง</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>7. รายละเอียดอื่น ๆ</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>8. สิทธิการรักษา</h5>
            <textarea type="text" />
          </div>
        </div>
      </div>
      <div class="historybox2">
        <h4 style="margin: 10px 0px 0px 10px">การตรวจร่างกาย</h4>
        <div class="inputboxrow">
          <div class="item1">
            <h5>HEENT</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>

        <div class="inputboxrow">
          <div class="item1">
            <h5>HEART</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>LUNG</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Ab</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Exr</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>PE text</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "refer"

}
</script>


<style>

</style>