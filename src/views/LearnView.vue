<!-- <script >
import axios from 'axios'

export default{
    data(){
        return {
            items:[]
        }
    },
    mounted(){
        axios.get('https://www.imooc.com/api/mall-wepApp/index/product?icode=JA2424E92D6EFBEEC').then(res=>{this.item=res.data.data
         console.log(res);
        }).catch(err=>{console.error(err);})
    }
}

</script>
<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in items" :key="index" class="imgli">
                <img :src="item.url" class="productimg">
                <p class="title">{{ item.title }}</p>
                <span>价格：{{ item.price }}</span>
            </li>
        </ul>
        </div>
</template>
<style scoped>
.container{
    margin-top: 20px;
    font-size: 10px;
}
.imgli{
    width: 45%;
    float: left;
    margin-right: 10px;
}
.title{
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.productimg{
    text-align: center;
    width: 97%;
}</style> -->
<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
<div class="redbg" style="height: 80px;">
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
      <van-swipe-item v-for="(item, index) in recommendcarousel_images" :key="index">
        <div class="swipe-item" :style="{ backgroundImage: `url('${item.url}')` }"></div>
      </van-swipe-item>
    </van-swipe>
<!-- 推荐 -->
    <div class="recommend-section">
      <div class="section-header">
        <span>为您推荐</span>
        <!-- <van-button  round type="default" size="small" @click="goToMore" >更多</van-button> -->
      </div>
      <div class="course-list">
        <div class="course-item" v-for="(item, index) in recommendposts" :key="index" @click="ToMessage(item)">
          <div class="course-img" :style="{ backgroundImage: `url('${item.image_url}')` }">  </div>
          <div class="course-name">{{ item.title }}</div>
          <div class="course-duration">时长{{ item.study_time }}</div>
        </div>
      </div>
    </div>
      </van-tab>
      <van-tab title="榜单" @click="goToRank" >
    <div class="recommend-section">
      <div class="section-header">
      </div>
      <div class="rank-list">
        <div class="rank-item" v-for="(item, index) in rankcourse" :key="index" @click="ToMessage(item)">
          <div class="rank-img" :style="{ backgroundImage: `url('${item.image_url}')` }"> </div>
          <div class="name">{{item.title}}</div>
          <!-- <div class="time"></div> -->

          <div class="score">{{ item.rating }}</div>

        </div>
      </div>
    </div>
      </van-tab>
    </van-tabs>





  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const rankcourse=ref('');
const recommendcarousel_images=ref('');
const recommendposts=ref('');
onMounted(()=>{axios.get('http://192.168.73.40:8000/api/study_sections').then(res=>{
console.log(res);
 recommendcarousel_images.value=res.data.recommend.carousel_images;
recommendposts.value=res.data.recommend.posts;
 rankcourse.value=res.data.ranklist.posts;
}).catch(err=>{console.log('无法获取到课程')})})

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
const handleBellClick = () => {
  console.log('点击了铃铛');
};
const goToRank = () => {
  console.log('前往榜单');
};

const goToMore = () => {
  console.log('查看更多推荐');
};
const ToMessage = (item) => {
  sessionStorage.setItem('data', JSON.stringify(item));
  router.push('/message'); // 使用获取的路由实例
};

</script>

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
.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 8px;
  margin-bottom: 8px;
}

.swipe {
  height: 150px;
  background-color: #eee;
  margin: 10px;
  border-radius: 8px;
  background-size: contain;
}
.name{
    margin: 1px;
    font-size: 14px;
}
.time{
    margin-right: 70px;
    float: left;
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
/* 为你推荐区 */
.recommend-section {
  padding: 0 16px 16px;
}
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.section-header span {
  font-size: 16px;
  font-weight: bold;
}
.course-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.course-item {
  width: 48%;
  margin-bottom: 15px;
  text-align: center;
}
.rank-list{
    width: 100%;
      display: flex;
      flex-direction: column;

}

.rank-item{
    width: 100%;
      margin-bottom: 20px;
/* flex-wrap: wrap; */
  /* text-align: center; */

}
.course-img {
  height: 80px;
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 5px;
background-size: contain;
}
.rank-img {
  height: 80px;
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 5px;
  margin-right: 10px;
  width: 50%;
  float:left;
  background-size: contain;
}
.course-name {
  font-size: 14px;
  margin-bottom: 2px;
}
.course-duration {
  font-size: 12px;
  color: #999;
}
.score{
    margin-right: 10px;
    color:brown
}
</style>