<script >
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
}</style>