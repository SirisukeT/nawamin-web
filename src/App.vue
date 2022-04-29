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
  width: 100%;
  /* max-width: 1400px; */
  height: 100%;
  background-color: #CDDAD7;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

.main-admin {
  /* height: 100%; */
  /* width: 100%; */
  /* width: 1400px; */
  display: flex;
  flex-direction: column;
}

div .main-content {
  margin-top: 100px;
  min-width: 1150px;
  /* display: grid;
  grid-template-columns: 12% 88%; */
  /* padding: 1rem 2rem; */
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
  align-items: center;
  padding-bottom: 20px;
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
button.save {
  font-weight: bold;
  margin-top: 60px;
  margin-right: 20px;
  width: 150px;
  height: 60px;
  background-color: #25957A;
  border-radius: 15px;
  border: 1.75px solid black;
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
  .container-fluid {
    max-width: 960px;
  }

  div.sidenav{
    display: none;
  }

  .content-naw{
    margin-left: 0;
  }
}
</style>
