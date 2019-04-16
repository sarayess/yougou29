<template>
  <!-- 顶部搜索框 -->
  <div>
   <div class="mytop" :style="{position: isScroll}">
      <!-- 头部搜索 -->
      <div class="search">
        <div class="serach_input">
          <input type="text" v-model="query">
          <div class="word">
            <icon type="search" size="20"></icon>
          </div>
        </div>
      </div>
      
     
    </div>
    <!-- 顶部tab -->
    <div class="tab">
      <div @click="selectedIndex = index" :class="{active:selectedIndex==index}" v-for="(item,index) in tabList" :key="index">{{item}}</div>
     </div>
     <!-- 商品列表 -->
     <div>
     <div class="product" :style="{margonTop:margintop}" v-for="(item,index) in goodsList" :key="index">
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
      pagesize:10,
      isend:false,
      isScroll:'static',
      margintop:'0px'
    }
  },
  methods: {
    async getDataList(){
      //判断请求回来的数组的长度如果长度为0那么说明没有新的数据返回应该停止发请求
      if(this.isend){
         wx.showToast({
            title: '数据加载完了',
            icon: 'succes',
            duration: 2000,
            mask:true
        })
        return
      }
      
      //提示数据正在加载中
     
      let res = await request({
        url:"https://itjustfun.cn/api/public/v1/goods/search",
        data:{
        query:this.query,
        pagenum:this.pagenum,
        pagesize:this.pagesize

        }
      })
      //再提示说明数据已经加载完成
      if(res.data.data.goods.length == 0){
          this.isend = true
        
       
      }
       
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
  },
  onUnload(){
    this.goodsList=[]
  },
  //下拉加载
  onPageScroll(scroll){
    //当事件发生的时候头部设置成固定定位
    //此时需要操作dom元素
    if(scroll.scroolTop == 0){
      this.isScroll = 'static'
      this.margintop = '0rpx'
    }else {
       this.isScroll = 'fixed'
        this.margintop = '200rpx'
    }
  },
  onPullDownRefresh(){
    this.selectedIndex = 0
    this.goodsList=[]
    this.pagenum = 1
    this.pagesize=10
    this.isend = false
    this.isScroll = 'static'
    //重新发送请求
    this.getDataList()


  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
