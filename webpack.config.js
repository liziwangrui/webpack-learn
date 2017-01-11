module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  //在配置文件里添加JSON loader
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'//添加对样式表的处理
      }
    ]
  },
  postcss: {
    requier('autoprefixer')
  }
  devserver: {
    contentBase: './public',
    inline: true,
    colors: true,
    historyApiFallback: true
  }
}
