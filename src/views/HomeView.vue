<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
<div class="redbg" style="height: 80px;">
    <!-- <van-nav-bar
      right-icon="search"
      @click-right="onSearchClick"
    >
      <template #left>
        <van-search
          v-model="searchValue"
          placeholder="搜索"
          shape="round"
          @search="onSearch"
          style="width: 160px;"
        />
        <div style="width: 170px;">红色教育</div>
      </template>

    </van-nav-bar> -->
        <van-search
          v-model="searchValue"
          placeholder="搜索"
          shape="round"
          @search="onSearch"
          background="#d62f3f"
          style="width: 120px;"
        />
        
</div>
    <!-- 标签栏 -->
    <van-tabs v-model:active="activeTab">
      <van-tab title="推荐" />
      <van-tab title="要闻" />
      <van-tab title="新思想" />
      <van-tab title="历史" />
      <van-tab title="综合" />
    </van-tabs>

<!-- <div class="redbg" style="height:100px"></div> -->
<!-- <img src="@/assets/去除红色教育字体.png" alt="" style="height: 100px;"> -->
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in 3" :key="index">
        <div class="swipe-item">图片</div>
      </van-swipe-item>
    </van-swipe>

    <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index" title="列表项" value=item.value />
    </van-cell-group>


  </div>
</template>

<!-- <script setup>
import { ref } from 'vue';

const searchValue = ref('');
const activeTab = ref(0);
const activeTabbar = ref(0);

const onSearchClick = () => {
  // 点击搜索图标的逻辑，比如展开搜索框等，这里简单示例
  console.log('点击搜索图标');
};

const onSearch = (value) => {
  // 搜索逻辑，比如根据 value 发请求获取数据等
  console.log('搜索内容：', value);
};
</script> -->

<style scoped>
.home-page {
  background-color: #fff;
  min-height: 100vh;
}
.redbg{
    background-image: url(@/assets/红色教育.png);
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center center;
}


.swipe {
  height: 150px;
  background-color: #eee;
  margin: 10px;
  border-radius: 8px;
}

.swipe-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
  color: #333;
}
</style>
<script>
import axios from 'axios';
//import { onMounted } from 'vue';
import { ref } from 'vue';

const searchValue = ref('');
const activeTab = ref(0);
const activeTabbar = ref(0);

const onSearchClick = () => {
  // 点击搜索图标的逻辑，比如展开搜索框等，这里简单示例
  console.log('点击搜索图标');
};

const onSearch = (value) => {
  // 搜索逻辑，比如根据 value 发请求获取数据等
  console.log('搜索内容：', value);
};

export default {
  name: 'row',
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios.get('https://www.imooc.com/api/mall-wepApp/index/product?icode=JA2424E92D6EFBEEC')
      .then(res => {
        this.items = res.data.data;
        console.log(this.items);
      })
      .catch(err => {
        console.error('数据加载失败:', err);
      });
  }
}

</script>