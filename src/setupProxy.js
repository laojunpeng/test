const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://dev.cloud.zhibankeji.com',
      secure: false,
      changeOrigin: true,
    }),
  )
  app.use(
    createProxyMiddleware('/account', {
      target: 'http://dev.cloud.zhibankeji.com',
      secure: false,
      changeOrigin: true,
    }),
  )
}
