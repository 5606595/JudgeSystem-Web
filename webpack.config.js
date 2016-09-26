const path = require('path');
const webpack = require('webpack')
module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        // publicPath: 'http://localhost:3000/dist/'
    },
    entry: [
        // 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        './entry/index'
    ],
    module: {
        //加载器配置
        loaders: [
            //LESS文件先通过less-load处理成css，然后再通过css-loader加载成css模块，最后由style-loader加载器对其做最后的处理，
            // 从而运行时可以通过style标签将其应用到最终的浏览器环境
            // { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
            //.css 文件使用 style-loader 和 css-loader 来处理
            // { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理 jsx-loader可以添加?harmony参数使其支持ES6语法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                } //备注：es2015用于支持ES6语法，react用于解决render()报错的问题
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/ig,
            //     loaders: [
            //         'file?hash=sha512&digest=hex&name=[hash].[ext]',
            //         'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // },
            // //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     '__DEV__': true,
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('development')
        //     }
        // })
    ],
    externals: []
}