<template>
  <!-- 页面容器，可结合 Vant 的 NavBar、Tabbar 等实现完整布局 -->
   <div class="redbg" style="height: 100px;">
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
  />
  </div>
  <div class="red-education-container">
    <!-- 标题区域 -->
    <div class="title-wrap">
      <h2 class="title">{{ title }}</h2>
      <p class="meta">发布时间：{{ publishTime }} | 来源：{{ source }}</p>
    </div>
    <!-- 正文区域 -->
    <div class="content">
      {{ content }}
    </div>
    <!-- 图片区域，这里用 Vant 的 Image 组件示例 -->
    <van-image
      v-if="imageUrl"
      :src="imageUrl"
      fit="cover"
      class="custom-image"
    />
    <!-- 互动区域，对应底部的输入、点赞等 -->
    <div class="interact-bar">
      <van-field
        v-model="comment"
        placeholder="欢迎发表你的观点"
        class="comment-input"/>
      <div class="icon-group">
        <van-icon
          name="chat-o"
          size="20"
          @click="handleComment"
        />
        <span class="dot" v-if="unreadCount > 0">{{ unreadCount }}</span>
        <van-icon
          name="like-o"
          size="20"
          @click="handleLike"
          :color="liked ? 'red' : ''"
        />
        <van-icon
          name="share-o"
          size="20"
          @click="handleShare"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import 'vant/lib/index.css'; // 引入 Vant 样式，若用自动按需引入可配 unplugin-vue-components
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter();
const messageData = ref(null);

const title=ref('');
const publishTime=ref('');
//const source=ref('');
const content=ref('');
const imageUrl=ref('');
onMounted(() => {
  // 从sessionStorage获取并解析数据
  const data = sessionStorage.getItem('data');
  if (data) {
    messageData.value = JSON.parse(data);
    console.log('接收到的数据:', messageData.value);
    content.value=messageData.value.content;
    title.value=messageData.value.title;
    publishTime.value=messageData.value.publish_time;
    imageUrl.value=messageData.value.image_url;
  }
});
// 模拟数据
//const title = '传承红色精神，践行初心使命';
//const publishTime = '2025-07-04';
const source = '红色教育平台';
//const content = '正文内容...这里可填充红色教育相关文章、故事等，传递红色文化、革命历史与精神内涵...';
//const imageUrl = 'https://via.placeholder.com/300x200?text=Red+Education'; // 占位图，替换实际图片地址

// 互动相关状态
const comment = ref('');
//const unreadCount = ref(1); // 未读评论数
const liked = ref(false); // 点赞状态

// 导航栏返回事件
const onClickLeft = () => {
  // 可实现返回上一页逻辑，如使用 vue-router 的 useRouter

  router.go(-1);
};

// 发表评论
const handleComment = () => {
  if (comment.value.trim()) {
    console.log('发表评论：', comment.value);
    // 可调用接口提交评论，这里简单清空
    comment.value = '';
  }
};

// 点赞
const handleLike = () => {
  liked.value = !liked.value;
  console.log('点赞状态：', liked.value);
};

// 分享
const handleShare = () => {
  console.log('执行分享逻辑');
  // 可结合社交平台 SDK 实现分享
};
</script>

<style scoped>
.red-education-container {
  padding: 16px;
  background-color: #fff;
  min-height: calc(100vh - 46px);
}

.title-wrap {
  margin-bottom: 12px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
}

.meta {
  font-size: 12px;
  color: #999;
}

.content {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 60px;
  color: #333;
}

.custom-image {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  border-radius: 8px;
}

.interact-bar {
    position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: white;
  border-top: 1px solid #eee;
  z-index: 100; /* 确保在其他内容上方 */
}

.comment-input {
  flex: 1;
  margin-right: 8px;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 8px 12px;
}

.icon-group {
  display: flex;
  align-items: center;
}

.icon-group .van-icon {
  margin-left: 12px;
  cursor: pointer;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  position: absolute;
  top: -4px;
  right: -4px;
}

/* 调整图标与未读红点的位置关系 */
.icon-group > div {
  position: relative;
}
.redbg{
    background-image: url(@/assets/红色教育.png);
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center center;
}
.van-nav-bar{
    background:none;
}

</style>