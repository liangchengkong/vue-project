<script >
import axios from 'axios';
export default
{

name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods:{
    login(){
    axios.post('api',{username:this.username,password:this.username})
    .then(res=>{}).catch(err=>{})
}}
}
</script>
<template>
    <form action="">
        <div>
            <input type="text" v-model="username">
            <label for="username"></label>
        </div>
        <div>
            <input type="text" v-model="password">
            <label for="password"></label>
        </div>
        <button type="submit">登陆</button>
    </form>
</template>
<style scoped></style>