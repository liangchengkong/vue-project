<script>
import {ref} from 'vue';
import 'vant/lib/index.css';
//import Login from './Login.vue';

export default {
    setup(){
        const active=ref(0);
        return {active};
    }

}
</script>

<template>
    <div>
        <van-tabbar v-model="active" >
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="live" to="/Learn">学习</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/Mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>