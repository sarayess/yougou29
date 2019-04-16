let request = function(option){
  return new Promise((resolve,reject)=>{
      wx.request({
          url:option.url,
          methods: option.method || 'get',
          header:option.header || {},
          data:option.data || {},
          success:function(res){
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