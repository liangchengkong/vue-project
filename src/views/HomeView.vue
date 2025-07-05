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
          @click="ifshowSearchPopup"
          background="#d62f3f"
          style="width: 120px;"
        />
    <SearchPopup
      v-model="showSearchPopup"
      :recommendedKeywords="recommendedKeywords"
      :hotTopics="hotTopics"
      @search="handleSearch"
    />
</div>

    <!-- 标签栏 -->
    <van-tabs v-model:active="activeTab">
      <van-tab title="推荐" >
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>
        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage(item)" >
    <template #title>
      <div class="title-with-image">
        <img :src="item.image_url" alt="图片" class="title-image" />
        <span class="title-text">{{ item.title }}</span>
      </div>
    </template>
      </van-cell>
    </van-cell-group>


      </van-tab>
      <van-tab title="要闻" >
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in sss[1].carousel_images" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in sss[1].posts" :key="index"  :value='item.publish_time' @click="ToMessage(item)" >
    <template #title>
      <div class="title-with-image">
        <img :src="item.image_url" alt="图片" class="title-image" />
        <span class="title-text">{{ item.title }}</span>
      </div>
    </template>
      </van-cell>
    </van-cell-group>


      </van-tab>
      <van-tab title="新思想">
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in sss[2].carousel_images" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in sss[2].posts" :key="index"  :value='item.publish_time' @click="ToMessage(item)" >
    <template #title>
      <div class="title-with-image">
        <img :src="item.image_url" alt="图片" class="title-image" />
        <span class="title-text">{{ item.title }}</span>
      </div>
    </template>
      </van-cell>
    </van-cell-group>


      </van-tab>
      <van-tab title="历史" >
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in sss[3].carousel_images" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in sss[3].posts" :key="index"  :value='item.publish_time' @click="ToMessage(item)" >
    <template #title>
      <div class="title-with-image">
        <img :src="item.image_url" alt="图片" class="title-image" />
        <span class="title-text">{{ item.title }}</span>
      </div>
    </template>
      </van-cell>
    </van-cell-group>


      </van-tab>
      <van-tab title="综合" >
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in sss[4].carousel_images" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in sss[4].posts" :key="index"  :value='item.publish_time' @click="ToMessage(item)" >
    <template #title>
      <div class="title-with-image">
        <img :src="item.image_url" alt="图片" class="title-image" />
        <span class="title-text">{{ item.title }}</span>
      </div>
    </template>
      </van-cell>
    </van-cell-group>


      </van-tab>
    </van-tabs>





<!-- <img v-for="(item, index) in items" :key="index":src="item.image_url" alt=""> -->

  </div>
</template>



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
      background-size: contain;
}
/*帖子title样式 */
.title-with-image {
  display: flex;
  align-items: center;
}
.title-image {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 4px;
  object-fit: cover;
}
.title-text {
  flex: 1;
}
</style>
<script>
import axios from 'axios';
import { Toast } from 'vant'; // 确保引入 Toast 组件
import SearchPopup from '../components/SearchPopup.vue'; // 引入搜索弹出层组件

export default {
  name: 'row',
  components: { SearchPopup }, // 注册组件
  data() {
    return {
      items: [],
      image: {},
      sss:[],
      searchValue: '',
      activeTab: '推荐', // 设置默认激活的标签页
      showSearchPopup: false, // 控制搜索弹出层显示状态
      recommendedKeywords: ['美食', '旅行', '科技', '健康', '教育'], // 推荐关键词
      hotTopics: [
        { title: '2025年最受欢迎的旅游目的地', hits: '25.3万' },
        { title: '健康饮食新趋势', hits: '18.7万' },
        { title: '人工智能最新进展', hits: '15.6万' },
        { title: '最佳健身训练方法', hits: '12.4万' },
        { title: '在线教育平台对比', hits: '9.8万' }
      ]
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('http://192.168.73.40:8000/api/home_sections')
        .then(res => {
          this.image = res.data[0].carousel_images;
          this.items = res.data[0].posts;
          this.sss=res.data;
          console.log('数据加载成功:', res);
        })
        .catch(err => {
          console.error('数据加载失败:', err);
          Toast.fail('数据加载失败');
        });
    },

    // 显示搜索弹出层
    ifshowSearchPopup() {
      this.showSearchPopup = true;
    },

    // 处理搜索事件（来自弹出层）
    handleSearch(value) {
      if (!value.trim()) {
        Toast('请输入搜索内容');
        return;
      }

      this.searchValue = value;
      console.log('执行搜索:', value);
      Toast(`搜索: ${value}`);

      // 调用API进行实际搜索
      this.performSearch(value);
    },

    // 执行实际搜索（调用后端API）
    performSearch(keyword) {
      // 这里应该调用搜索API，而不是重新加载数据
      axios.get(`http://192.168.73.40:8000/api/search?keyword=${encodeURIComponent(keyword)}`)
        .then(res => {
          // 处理搜索结果
          this.items = res.data;
          console.log('搜索结果:', res);
        })
        .catch(err => {
          console.error('搜索失败:', err);
          Toast.fail('搜索失败，请重试');
        });
    },

    ToMessage(item) {
        //sessionStorage.setItem('data',item);
        sessionStorage.setItem('data', JSON.stringify(item));
      this.$router.push('/message');

    },

    // 点击搜索图标（原方法保留，改为显示弹出层）
    onSearchClick() {
      this.showSearchPopup();
    }
  }
}
</script>