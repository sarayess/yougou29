<template>
<!-- 顶部搜索栏 -->
    
    <div class="top">
      <input type="text">
      <div class="search">
        <icon type="search" size="20"/>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .top {
  background-color: #eb4450;
  padding: 20rpx 16rpx;
  position: relative;

  input {
    margin: 20rpx 0;
    width: 100%;
    height: 60rpx;
    background-color: #fff;
  }
  .search {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      margin-left: 20rpx;
    }
  }
}
</style>
