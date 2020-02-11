module.exports = {
    // npm run build  进行项目打包
    // publicPath: '/',  //根路径
    // outputDir: "dist",  //打包输出的路径
    // assetsDir: 'ren' , //静态资源输出路径（css,iamge,js,fonts）
    // lintOnSave: false, //是否开启esLint的检测  true false error
    // indexPath: 'home.html',  //设置输出首页的名字
    devServer: { //对服务器的设置
        open: true , //运行后，自动在浏览器打开
        host: "localhost",  //设置主机的名字（localhost）
        port: '1234',  //端口号
    }
}