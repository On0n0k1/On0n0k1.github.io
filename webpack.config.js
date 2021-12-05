const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, args) => {
    const isProductionMode = (args.mode === 'production');
    
    return {
        entry:  path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.join(__dirname, '/docs'),
            filename: isProductionMode ? '[name].[contenthash].js' : '[name].[hash].js',
        },
        module: {
            
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        { loader: "css-loader" }
                    ]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    use: [      
                        {
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 819200,
                            },
                        },
                    ],
                }
            ],
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './public/favicon.ico', 
                        to: './favicon.ico' 
                    },
                    {
                        from: './public/assets/models/Flamingo.glb',
                        to: './assets/models/Flamingo.glb'
                    },
                    {
                        from: './public/assets/models/Parrot.glb',
                        to: './assets/models/Parrot.glb'
                    },
                    {
                        from: './public/assets/models/Stork.glb',
                        to: './assets/models/Stork.glb'
                    },
                    {
                        from: './public/assets/textures/uv-test-bw.png',
                        to: './assets/textures/uv-test-bw.png'
                    },
                    {
                        from: './public/assets/textures/uv-test-col.png',
                        to: './assets/textures/uv-test-col.png'
                    },
                    {
                        from: './public/assets/textures/dockerlogo.png',
                        to: './assets/textures/dockerlogo.png'
                    },
                    {
                        from: './public/assets/textures/pythonlogo.png',
                        to: './assets/textures/pythonlogo.png'
                    },
                    {
                        from: './public/assets/textures/rustlogo.png',
                        to: './assets/textures/rustlogo.png'
                    },
                    {
                        from: './public/assets/textures/webassemblylogo.png',
                        to: './assets/textures/webassemblylogo.png'
                    },
                    {
                        from: './public/assets/textures/webpacklogo.png',
                        to: './assets/textures/webpacklogo.png'
                    },
                    {
                        from: './public/assets/textures/webstack.png',
                        to: './assets/textures/webstack.png'
                    },
                    {
                        from: './public/assets/textures/reactlogo.png',
                        to: './assets/textures/reactlogo.png'
                    }
                ]
            }),
            new HtmlWebpackPlugin(
                {
                    favicon:'./public/favicon.ico',
                    template: './public/index.html'
                }
            )
        ]
    };
}
// {
//     test: /\.(glb|gltf)$/,
//     use:
//         [
//             {
//                 loader: 'file-loader',
//                 options:
//                 {
//                     outputPath: 'assets/models/'
//                 }
//             }
//         ]
// },
