const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack=require('webpack')
const htmlPlugin=require('html-webpack-plugin')

// path是node.js自带的模块

// !!用于判断环境
const isDev = process.env.NODE_ENV === "development"
console.log(process.env.NODE_ENV)

const config = {
  target:'web',
  // 为webpack指定一个目标打包环境（默认是web）,还可以是electron/node环境等
  mode: 'development',
  entry: path.join(__dirname,"src/entry.js"),
  // path.join用来拼接路径，__dirname表示文件所在的根目录
  output: {
    filename: "bundle.js",
    path: path.join(__dirname,"dist")
  },
  // webpack原生只支持jsEs5,所以编译vue的话，需要loader来辅助
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.jsx$/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
        // css-loader将css代码编译，而style-loader将编译后的代码放入网页中，而webpack加载顺序是从右到左，所以style-loader放在右边
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test:/\.(gif|jpeg|png|svg|jpg)$/,
        // 正则表达式中，空格符也会算进去，所以匹配的时候注意不要留多余的空格符
        use:[
          {
            options: {
              // limit:1024,
              name:'dist/[name]_frank.[ext]'
            },
            loader: "file-loader",
          }
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV : isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new htmlPlugin({
      hash: true
    })
//     将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
  ],
}

// 如果process.NODE_ENV是否为development,修改config
if(isDev){
  config.devtool='#cheap-module-eval-source-map'
  config.devServer = {
    port:'8088',
    host:"0.0.0.0",
    // 配置为0.0.0.0可以通过127.0.0.1和ip和localhost来访问
    overlay:{
      error:true,
    },
    // 这个选项开启后可以webpack打包后，遇到错误直接在页面上打印出来
    hot:true,
    // open:true,
  }
  config.plugins.push(
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  )
  config.devtool='#cheap-nodule-eval-souce-map'
}
console.log(process.env.NODE_ENV)

module.exports = config;