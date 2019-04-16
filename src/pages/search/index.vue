<template>
  <!-- 顶部搜索框 -->
  <div>
    <div class="top">
      <input type="text" value="小米">
      <icon type="search" size="20"/>
    </div>
    <!-- 顶部tab -->
    <div class="tab">
      <div @click="selectedIndex = index" :class="{active:selectedIndex==index}" v-for="(item,index) in tabList" :key="index">{{item}}</div>
     </div>
     <!-- 商品列表 -->
     <div class="product" v-for="(item,index) in goodsList" :key="index">
       <div class="left">
         <image :src="item.goods_small_logo"></image>
       </div>
       <div class="right">
         <span class="word">{{item.goods_name}}</span>
         <div class="price">
           <span>¥</span>
           <span>{{item.goods_price}}</span>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
export default {
  data(){
    return{
      tabList:['综合','销量','价格'],
      selectedIndex:0,
      //存储商品详细信息的数组
      goodsList:[],
      query:'',
      pagenum:1,
      pagesize:10
    }
  },
  methods: {
    async getDataList(){
      let res = await request({
        url:"https://itjustfun.cn/api/public/v1/goods/search",
        data:{
        query:this.query,
        pagenum:this.pagenum,
        pagesize:this.pagesize

        }
      })
      if(this.goodsList.length==0){
        this.goodsList = res.data.data.goods
      }else{
        //将之前的数据全部加到goodsList列表中
        this.goodsList = this.goodsList.concat(res.data.data.goods)
      }
    }
  },
  mounted() {
    //接收参数
    this.query = '曲面电视'
    this.getDataList()
  },
  //上拉加载事件
  onReachBottom(){
    this.pagenum = this.pagenum+1
    this.getDataList()
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
