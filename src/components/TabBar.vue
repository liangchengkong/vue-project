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

<template>]
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-0">首页</van-tabbar-item>
            <van-tabbar-item icon="chat-0">智能问答</van-tabbar-item>
            <van-tabbar-item icon="info-0">可视化</van-tabbar-item>
            <van-tabbar-item icon="hot-0">内容展示</van-tabbar-item>


        </van-tabbar>
    </div>
</template>