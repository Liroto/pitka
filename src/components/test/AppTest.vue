<template>
  <div id="app">
    <div>
      <select v-model="currFac">
          <option v-for="faculty in faculties" :key="faculty.id" :value="faculty.id">{{faculty.name}}</option>
      </select>
      <p>Выбрано: {{faculties}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

 export default({
  faculties: 'MainList',
  data(){
   return{
     currFac: "",
     faculties: [],
   }
  },
   mounted(){
    getFaculties();
   },
   methods:{
     getFaculties(){
       axios.get("mongodb+srv://admin:kjf4-kjf5@cluster0.hjdxb.mongodb.net/usersdb?retryWrites=true&w=majority")
       .then(response=>(this.faculties = response.data));
       }
     }
   }) 
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
