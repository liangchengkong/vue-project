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



<!-- <template>


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


</template> -->

<template>
  <div class="login-page">


    <!-- 标题 -->
    <h2 class="title">密码登录</h2>

    <!-- 手机号输入框 -->
    <van-field
      v-model="phone"
      type="text"
      placeholder="请输入手机号"
      round
      :border="false"
    />

    <!-- 密码输入框 + 忘记密码 -->
    <van-field
      v-model="password"
      type="password"
      placeholder="请输入密码"
      :clearable="false"
    >
      <template #button>
        <van-button size="mini" type="text" >
          忘记密码
        </van-button>
      </template>
    </van-field>

    <!-- 协议勾选 -->
    <van-checkbox v-model="isAgreed" shape="round" class="agree-checkbox">
    </van-checkbox>
      我已阅读
      <a href="#" class="protocol-link">《服务协议》</a> 和
      <a href="#" class="protocol-link">《隐私政策》</a>并同意
      相关约定


    <!-- 登录按钮 -->
    <van-button
      type="danger"
      block
      round
      @click="login"
      :disabled="!isAgreed"
    >
      登录
    </van-button>


    <div class="sms-link" @click="OnRegister">没有账号？注册一个</div>

    <!-- 短信登录链接 -->
    <div class="sms-link" @click="onSmsLogin">短信验证码登录</div>

    <!-- 其他登录方式 -->
    <div class="other-login">其它登录方式</div>
    <!-- <div class="other-login-icons">
      <van-icon name="phone-o" class="icon" @click="onOtherLogin('phone')" />
      <van-icon name="wechat" class="icon wechat" @click="onOtherLogin('wechat')" />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'Login',
  data() {
    return {
        isAgreed:false,
      phone: '',
      password: '',
      showPassword: false
    };
  },
  methods: {
      togglePasswordVisibility() {
      this.showPassword = !this.showPassword;},
    login() {
    //   if (this.password === '123456' && this.phone === 'admin') {
    //     this.$router.push('/');
    //     sessionStorage.setItem('token', '111');
    //   } else {
    //     //this.$message.error('密码错误或用户不存在');

    //   }
           axios.post('http://192.168.73.40:8000/api/login',{phone:this.phone,password:this.password})
     .then(res=>{sessionStorage.setItem('token', '111');this.$router.push('/');console.log('111')}).catch(err=>{console.error('登录失败', err);})
},
    OnRegister(){this.$router.push('/Register')}
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }

</script>

<!-- <style scoped>



.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  /*height: 300px; /* 需要指定高度 */
}
button {
  cursor: pointer;
}
</style> -->
<style scoped>

.van-field {
  --van-field-border-color: black; /* 边框颜色 */
  --van-field-border-radius: 8px; /* 圆角大小 */
  --van-field-border-width: 1px; /* 边框宽度 */
  --van-field-padding: 10px; /* 内部间距 */
}
.login-page {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}

.agree-checkbox {
  margin: 10px 0;
  font-size: 14px;
}

.protocol-link {
  color: #1989fa;
  text-decoration: none;
}

.sms-link {
  text-align: center;
  color: #1989fa;
  margin: 15px 0;
  cursor: pointer;
}

.other-login {
  text-align: center;
  margin: 20px 0 10px;
  font-size: 14px;
  color: #999;
}

.other-login-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icon {
  font-size: 40px;
  cursor: pointer;
}

.wechat {
  color: #28a745;
}
</style>