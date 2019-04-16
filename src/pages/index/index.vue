<template>
  <div>
    <!-- 顶部搜索栏 -->
       <tophead></tophead>
    <!-- 轮播图部分 -->

    <swiper class="loop" autoplay circular indicator-dots>
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <image :src="item.image_src" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 导航部分 -->
    <div class="nav">
       <a href="#" class="item" v-for="(item,index) in cateList" :key="index">
         <img :src="item.image_src" alt="">
          
       </a>
       
    </div>
    <!-- 主体商品部分 -->
    <div class="market" v-for="(item,index) in floorList" :key="index">
      <div class="title">
        <image :src="item.floor_title.image_src" mode="aspectFit"></image>
      </div>
      <div class="product">
         <div class="left">
           <a href="#">
              <image :src="item.product_list[0].image_src" mode="aspectFit" ></image>
           </a>
         </div>
         <div class="right">
            <image v-if="subindex !=0" v-for="(subitem,subindex) in item.product_list" :key="subindex" :src="subitem.image_src"></image>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入文件
import request from '../../utils/request.js'
//引入头部组件
import tophead from '../../components/tophead.vue'
export default {
  components:{
    tophead
  },
  data() {
    return {
      //存储轮播图数据的数组
      imgList:[],
      //存储分类数据的数组
      cateList:[],
      //楼层数据数组
      floorList:[]
    };
  },
  
  //请求页面数据
  async mounted() {
     let res = await request({
       url:"https://itjustfun.cn/api/public/v1/home/swiperdata"
     })
     //console.log(res)11
     this.imgList = res.data.data;
     let res1 = await request({
       url:"https://itjustfun.cn/api/public/v1/home/catitems"
     })
     //console.log(res1)
     this.cateList = res1.data.data
     //请求楼层的数据
     let res2 = await request({
       url:"https://itjustfun.cn/api/public/v1/home/floordata"
     })
     this.floorList = res2.data.data
    
  }
};
</script>

<style lang="less">

//轮播图区域
.loop {
    height: 340rpx;
    swiper-item {
        image {
             width: 100%;
            height: 340rpx;
        }
    }
}
// 导航样式
.nav {
  display: flex;
  width: 100%;
  align-items: center;
  .item {
    width: 25%;
    display: inline-block;
    margin: 30rpx 45rpx;
    font-size: 12px;
    text-align: center;
    img {
       width: 96rpx;
       height: 96rpx;
       
    
    }
    
  }
}
//商品部分
.market {
   .title {
     height: 88rpx;
      width: 100%;
      padding-left: 16rpx;
     
        image {
          width: 100%;
          height: 100%;
        
      }
   }
   .product {
     display: flex;
     margin-top: 20rpx;
     .left {
       width: 30%;
       height: 370rpx;
       margin-right: 10rpx;
       a {
         display: inline-block;
         width: 100%;
         height: 370rpx;
          image {
         width: 100%;
         height: 100%;
       }
       }
      
     }
     .right {
       width: 70%;
       height: 370rpx;
       display: flex;
       flex-wrap: wrap;
       
         
         image {
           width: 50%;
           height: 188rpx;
           
         
       }
     }
   }
}
</style>
