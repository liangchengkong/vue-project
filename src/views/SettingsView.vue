<template>
  <div class="my-page">
    <!-- 顶部背景 + 头像昵称区域 -->
    <div class="top-bg">
      <van-nav-bar
        left-arrow
        class="custom-nav"
        style="background-color: transparent;"
      />

    </div>


    <!-- 更多设置入口 -->
    <van-cell-group class="setting-group">
      <van-cell
        v-for="(item, index) in settingList"
        :key="index"
        :title="item.title"
        is-link
        @click="handleSettingClick(item)"
      />
    </van-cell-group>


  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();


// 更多设置数据
const settingList = [
  {  title: '切换账号' },
  {  title: '退出' },
];

const handleSettingClick = (item) => {
  console.log('点击了', item.title);
  router.push('/login');
};
</script>

<style scoped>
/* 页面基础样式 */
.my-page {
  min-height: 100vh;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 顶部背景区域 */
.top-bg {
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url(@/assets/红色教育.png);
background-size: contain;
}

/* 导航栏样式（透明背景，适配顶部渐变） */
.custom-nav .van-nav-bar__title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.custom-nav .van-icon {
  color: #fff;
}

/* 用户信息（头像 + 昵称） */
.user-info {
  position: absolute;
  bottom: 10px; /* 向上偏移，露出头像 */
  left: 20px;
  display: flex;
  align-items: center;
}
.avatar {
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
}
.nickname {
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}

/* 功能快捷入口 */
.func-group {
  display: flex;
  justify-content: space-around;
  padding: 20px 16px;
  margin-top: 40px; /* 给头像留出空间 */
  background-color: #fff;
}
.func-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.func-icon {
  font-size: 24px;
  color: #c82333; /* 图标颜色，与顶部背景呼应 */
  margin-bottom: 5px;
}
.func-text {
  font-size: 14px;
  color: #333;
}

/* 更多设置区域 */
.setting-group {
  margin: 10px 16px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.van-cell {
  border-bottom: 1px solid #f2f2f2;
}
.van-cell__icon {
  color: #c82333; /* 图标颜色统一 */
}

/* 底部Tab栏 */
.van-tabbar {
  background-color: #fff;
}
.van-tabbar-item--active {
  color: #c82333; /* 选中态颜色与顶部背景呼应 */
}
</style>