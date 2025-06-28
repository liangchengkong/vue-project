<script>
import {ref} from 'vue';
import 'vant/lib/index.css';



export default {
    setup(){
        const active=ref(0);
        return {active};
    }
}
</script>

<template>
    <div>
        <van-tabbar v-model="active" v-if="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="AI">智能问答</van-tabbar-item>
            <van-tabbar-item icon="info-o" to="/content">可视化</van-tabbar-item>
            <van-tabbar-item icon="hot-o" to="/visualization">内容展示</van-tabbar-item>
        </van-tabbar>
    </div>
</template>