<!-- <script >
import axios from 'axios';
export default
{

name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods:{
//     login(){
//     axios.post('api',{username:this.username,password:this.password})
//     .then(res=>{localStorage.setItem('token','true');this.$router.push='/'}).catch(err=>{})
// }
login(){
    if(this.password=='123456'&&this.username=='admin')
{
    this.$router.push('/');
    sessionStorage.setItem('token','111');
}
else

{alert('密码错误或用户不存在');
    //localStorage.setItem('token','false');
}
}
}
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
        <button type="button" @click="login">登陆</button>
    </form>
</template>
<style scoped>

</style> -->
<template>


<div >
<van-form @submit.prevent="login">
  <van-cell-group inset>
    <van-field
      v-model="username"
    left-icon="user-o"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      left-icon="goods-collect-o"
  :right-icon="showPassword ? 'eye' : 'eye-o'"
  @click-right-icon="togglePasswordVisibility"
  :type="showPassword ? 'text' : 'password'"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-cell-group inset>

</van-cell-group>

  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" @click="login">
      登录
    </van-button>
  </div>
</van-form>
</div>


</template>

<script>
import axios from 'axios';
//import 'vant/lib/index.css';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
      togglePasswordVisibility() {
      this.showPassword = !this.showPassword;},
    login() {
      if (this.password === '123456' && this.username === 'admin') {
        this.$router.push('/');
        sessionStorage.setItem('token', '111');
      } else {
        //this.$message.error('密码错误或用户不存在');

      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  /*height: 300px; /* 需要指定高度 */
}
button {
  cursor: pointer;
}
</style>