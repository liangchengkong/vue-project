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
        <div >
          <h2 >欢迎登录</h2>
          <p >请输入您的账号和密码</p>
        </div>

        <form @submit.prevent="login" >
          <div >
            <input type="text"v-model="username"placeholder="请输入用户名">
          </div>

          <div >
            <input :type="showPassword ? 'text' : 'password'"v-model="password"placeholder="请输入密码">
            <button type="button"@click="togglePasswordVisibility">
            </button>
          </div>

          <button type="submit">
            登录
          </button>

          <div >
            <div >
              <input type="checkbox"id="remember">
              <label for="remember" >记住我</label>
            </div>
            <a href="#" >忘记密码?</a>
          </div>
        </form>

        <div >
          <p >
            还没有账号? <a href="#" >立即注册</a>
          </p>
        </div>

      </div>


</template>

<script>
import axios from 'axios';

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
    login() {
      if (this.password === '123456' && this.username === 'admin') {
        this.$router.push('/');
        sessionStorage.setItem('token', '111');
      } else {
        this.$message.error('密码错误或用户不存在');
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style scoped>

button {
  cursor: pointer;
}
</style>