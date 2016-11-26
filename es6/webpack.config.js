var path = require('path');  //解析路径

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),  //入口
    output: {
        path: path.resolve(__dirname, 'build'), //生产build文件
        filename: 'bundle.js'   //出口,打包到这个文件
    },
    module: {
      loaders: [
        { test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"//先找到这个
        }
      ]
}
};//把这个对象发布出去
