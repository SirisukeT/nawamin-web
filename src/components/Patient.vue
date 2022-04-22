<template>
  <tr>
    <th>{{key}}</th>
    <th>{{name}}</th>
    <th>{{pdate}}</th>
    <th>{{sdate}}</th>
    <th>{{status}}</th>
    <th id="info"><button @click="patientInfo" >{{something}}</button></th>
  </tr>
</template>

<script>
export default{
    name:"Patient",
    props:{
        key:{type:Number},
        name:{type:String, required:true},
        pdate:{type:String},
        sdate:{type:String},
        status:{type:String, required:true},
        something:{type:String},
    },
    methods:{
        patientInfo(){
            alert(`ข้อมูลของ ${this.name} ค่ะ`);
        }
    }
    
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid black;
  text-align: center;
  padding: 8px;
}

th#info{
    width: 150px;
}
th#info button{
    border: 1px solid black;
    background-color: #25957A;
    border-radius: 10px;
    width: 100%;
}
</style>