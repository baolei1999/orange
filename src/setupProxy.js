const {createProxyMiddleware}=require("http-proxy-middleware")
module.exports=function(app){
    app.use("/cheng",createProxyMiddleware({
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/change":""
        }
    }))
}