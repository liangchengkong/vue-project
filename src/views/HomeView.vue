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
      <van-tab title="推荐" >
    <!-- 轮播图 -->
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>
        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage" >
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
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage" >
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
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage" >
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
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage" >
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
      <van-swipe-item v-for="(item, index) in image" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>

        <!-- 内容列表，这里简单用 Cell 模拟，实际可替换成真实内容 -->
    <van-cell-group>
      <van-cell v-for="(item, index) in items" :key="index"  :value='item.publish_time' @click="ToMessage" >
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

export default {
  name: 'row',
  data() {
    return {
      items: [],
      image:{},
      searchValue: '',
      activeTab: '推荐' // 设置默认激活的标签页
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {

    loadData() {
      axios.get('http://192.168.73.40:8000/api/home_sections')
        .then(res => {
          //this.items = res.data ;
          this.image=res.data[3].carousel_images
;this.items=res.data[3].posts
          console.log('数据加载成功:', res);
        })
        .catch(err => {
          console.error('数据加载失败:', err);
          //Toast.fail('数据加载失败');
        });
    },

    // 处理搜索事件
    onSearch() {
      if (!this.searchValue.trim()) {
        Toast('请输入搜索内容');
        return;
      }

      // 这里可以添加实际的搜索逻辑
      console.log('执行搜索:', this.searchValue);
      Toast(`搜索: ${this.searchValue}`);

      // 示例：根据搜索值过滤数据
      this.filterItems(this.searchValue);
    },
    ToMessage(){
        this.$router.push('/message')
    },
    // 根据关键词过滤数据
    filterItems(keyword) {
      // 重新加载数据作为示例
      this.loadData();

      // 实际项目中可以根据关键词过滤数据
      // const filtered = this.items.filter(item =>
      //   item.name.includes(keyword) || item.desc.includes(keyword)
      // );
      // this.items = filtered;
    },

    // 点击搜索图标
    onSearchClick() {
      this.$refs.searchRef.focus(); // 聚焦到搜索框
    }
  }
}
</script>