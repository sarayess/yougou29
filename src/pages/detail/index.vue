<template>
 <div>
   <!-- 轮播图区域 -->
    <swiper class="lunbo" indicator-dots autoplay>
      <block v-for="(item, index) in detailObj.pics" :key="index">
        <swiper-item>
          <image :src="item.pics_big" class="slide-image" mode="aspcetFill" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 商品信息 -->
    <div class="box">
      <div class="price">￥{{detailObj.goods_price}}</div>
      <div class="mess">
        <div class="word">{{detailObj.goods_name}}</div>
        <div class="shoucang">
          <span class="iconfont iconshoucang"></span>
          <span>分享</span>
          <button class="btn" open-type="share"></button>
        </div>
      </div>
      <div class="pass">快递：免运费</div>
    </div>
    <!-- 图文介绍 -->
     <div class="jieshao">
      <div class="title">图文介绍</div>
      <div class="msg" v-html = "detailObj.goods_introduce"></div>
    </div>
    <div class="bottom">
      <div class="callme">
        <span class="iconfont icontongyong-lianxikefutubiao"></span>
        <span>联系客服</span>
      </div>
      <div class="cart">
        <span class="iconfont icongouwuche"></span>
         <span>购物车</span>
      </div>
      <div class="incart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
 </div>
</template>

<script>
import myrequest from '../../utils/myrequest.js'

export default {
  data(){
    return{

      detailObj:{}
      
    }
  },
 async mounted() {
    var goods_id = 43982
    var url ='https://itjustfun.cn/api/public/v1/goods/detail'
  let res = await myrequest.get(url,{
   
    
    goods_id: goods_id
   
   
  })
  this.detailObj = res.data.data
  console.log(detailObj)
    
},
//点击分享事件
onShareAppMessage(){
  return{
    title:'今日份幸运送给你',
    path:'/pages/detail/main?goods_id='+this.goods_id,
    imageUrl:'https://img.alicdn.com/imgextra/i1/2348167658/O1CN0126RPXWNIblZq1XW_!!2348167658-0-daren.jpg_180x180xzq90.jpg_.webp'
  }
}
  
  }

 
</script>

<style scoped lang="less">
@import "./index.less";
</style>
