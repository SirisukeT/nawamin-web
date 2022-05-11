<script setup></script>

<template>
  <RouterView />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  background-color: #cddad7;
}

/* button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
} */

.content{
  min-height: 60vh;
}

.main-admin {
  display: flex;
  flex-direction: column;
}



.mt-71 {
  margin-top: 71px;
}

div .main-content {
  margin-top: 100px;
}

.content-naw {
  background-color :#CDDAD7;
  max-width: 100%;
  /* height: 100%; */
  /* display: flex; */
  min-width: 1150px;
  margin-left: 250px;
  padding: 1rem 5rem;
}

.content-naw p {
  font-size: xx-large;
}

.buttonbox {
  width: 100%;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 20px;
}
.buttonbox *{
  margin-left: 10px;
}
button.previous {
  font-weight: bold;
  margin-top: 60px;
  width: 150px;
  height: 60px;
  background-color: #f4d013;
  border-radius: 15px;
  border: 1.75px solid black;
}
button.save{
  font-weight: bold;
  margin-top: 60px;
  width: 150px;
  height: 60px;
  background-color: #25957A;
  border-radius: 15px;
  border: 1.75px solid black;
}
#savebutton {
  font-weight: bold;
  width: 150px;
  height: 60px;
  background-color: #25957A;
  border-radius: 15px;
  border: 1.75px solid black;
}
#reportbutton {
  font-weight: bold;
  width: 150px;
  height: 60px;
  background-color: #2B3CD4;
  border-radius: 15px;
  border: 1.75px solid black;
}
#detailbutton {
  font-weight: bold;
  width: 150px;
  height: 60px;
  border-radius: 15px;
  /* border: 1.75px solid black; */
  background: white;
  color: red;
}
.bigbox{
  flex-direction: column;
}
.dp-flex-r {
  display: flex;
  align-items: center;
  justify-content: center;
}

.marginA-10 {
  margin: 10px;
}

.marginL-10 {
  margin-left: 10px;
}
.marginR-10 {
  margin-right: 10px;
}
.marginT-10 {
  margin-top: 10px;
}
.marginB-10 {
  margin-bottom: 10px;
}
.marginLR-10 {
  margin-left: 10px;
  margin-right: 10px;
}

.marginA-10 {
  margin: 10px;
}

.marginL-25 {
  margin-left: 25px;
}
.marginR-25 {
  margin-right: 25px;
}
.marginT-25 {
  margin-top: 25px;
}
.marginB-25 {
  margin-bottom: 25px;
}
.marginLR-25 {
  margin-left: 25px;
  margin-right: 25px;
}

.ta-c {
  text-align: center;
}

@media (max-width: 1200px) {
  
}
@media (max-width: 992px) {
  .container-fluid {
    max-width: 960px;
  }
  .content-naw{
    margin-left: 0;
  }
  div.sidenav{
    display: none;
  }
}

.invertimg {
  -webkit-filter: invert(1);
   filter: invert(1);
}

.right{
  display: flex;
  justify-content: right;
}
</style>
