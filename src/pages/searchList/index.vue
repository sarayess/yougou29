<template>
 <div>
   <!-- 头部搜索框部分 -->
    <div class="header">
      <div class="search">
        <input type="text" v-model="query" placeholder="请输入需要搜索的内容">
        <icon type="search" size="20"/>
      </div>
      <button v-show="query.length==0?false:true" @click="cancel" class="btn">取消</button>
    </div>
    <!-- 历史搜索部分 -->
    <div class="history">
      <div class="title">
        <span>历史搜索</span>
        <icon type="clear" size="16" />
      </div>
      <div class="his-item">
          <div class="item">小米</div>
          <div class="item">小米智能电视</div>
          <div class="item">小米空气净化器</div>
          <div class="item">西门子洗碗机</div>
          <div class="item">华为手机</div>
          <div class="item">苹果</div>
          <div class="item">锤子</div>
      </div>
    </div>
 </div>
</template>

<script>


export default {
   data(){
     return{
       query:''
     }
   },
   methods: {
     cancel(){
       this.query=''
     }
   },
  }

 
</script>

<style lang="less">
 @import './index.less';
</style>
