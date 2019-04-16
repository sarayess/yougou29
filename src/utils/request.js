let request = function(option){
  return new Promise((resolve,reject)=>{
    wx.showLoading({
        title: '加载中',
      })
      
      wx.request({
          url:option.url,
          methods: option.method || 'get',
          header:option.header || {},
          data:option.data || {},
          success:function(res){
            wx.hideLoading()
              resolve(res)
          },
          fail:function(res){
              reject(Response)
          }
      })
  })
}
//暴露出去
export default request