<template>
  <van-nav-bar title="注册新账号" left-arrow @click-left="onClickLeft" />
  <van-cell-group>
    <!-- 手机号输入框 -->
    <van-field
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      required
    />
    <!-- 密码输入框 -->
    <van-field
      v-model="password"
      label="密码"
      placeholder="请输入密码"
      type="password"
      required
    />
    <!-- 确认密码输入框 -->
    <van-field
      v-model="confirmPassword"
      label="确认密码"
      placeholder="请确认密码"
      type="password"
      required
    />
    <!-- 协议勾选 -->
    <van-cell>
      <van-checkbox v-model="isAgree" shape="round" />
      <span class="agreement-text">
        我已阅读《<a href="#" class="protocol-link">服务协议</a>》和《<a href="#" class="protocol-link">隐私政策</a>》并同意相关约定。
      </span>
    </van-cell>
    <!-- 注册按钮 -->
    <van-button
      type="danger"
      block
      @click="handleRegister"
      :disabled="!isAgree || !phone || !password || !confirmPassword || password!==confirmPassword"
    >
      注册
    </van-button>
    <!-- 已有账号跳转 -->
    <div class="login-link" @click="goToLogin">我有账号，返回登录</div>
  </van-cell-group>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter
import { NavBar, CellGroup, Field, Cell, Checkbox, Button } from 'vant';
import axios from 'axios';

export default {
  name: 'RegisterPage',
  components: {
    NavBar,
    CellGroup,
    Field,
    Cell,
    Checkbox,
    Button
  },
  setup() {
    const router = useRouter(); // 获取路由实例
    const phone = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const isAgree = ref(false);

    // 返回上一页逻辑
    const onClickLeft = () => {
      router.go(-1); // 使用 router 实例
    };

    // 注册按钮点击逻辑
    const handleRegister = () => {
      if (password.value !== confirmPassword.value) {
        console.log('两次输入密码不一致');
        return;
      }
      else
      {axios.post('api',{phone:phone.value,password:password.value})
     .then(res=>{router.push('login')}).catch(err=>{console.error('注册失败', err);})}
      //console.log('手机号：', phone.value, '密码：', password.value, '同意协议：', isAgree.value);
    };

    // 跳转到登录页逻辑
    const goToLogin = () => {
      console.log('前往登录页');
      router.push('/login'); // 使用 router 实例
    };

    return {
      phone,
      password,
      confirmPassword,
      isAgree,
      onClickLeft,
      handleRegister,
      goToLogin
    };
  }
};
</script>


<style scoped>
.agreement-text {
  font-size: 14px;
  color: #666;
}
.protocol-link {
  color: #1989fa;
  text-decoration: underline;
}
.login-link {
  text-align: center;
  margin-top: 10px;
  color: #1989fa;
  cursor: pointer;
}
</style>