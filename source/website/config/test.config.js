
const config = require('../../config.json');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const FaviconPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const _ = require('lodash');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports={
    target:"node",
    entry:{
        "unit-test":"./test/unit.js"
    },
    output:{
        path:path.join(__dirname,'../test'),
        filename:"compiled.js",
        libraryTarget:"commonjs2"
    },
    plugins:_.compact([
    ]),
    resolve:{
        alias:{
            vue$:'vue/dist/vue.js',
            handlebars: 'handlebars/dist/handlebars.min.js',
            querystring: 'querystring-browser'
        }
    },
    module: {
        rules: [
          {
            test: /\.(md|txt)$/,
            loader: 'raw-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
              }
            }
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.styl$/,
            use: ['style-loader','css-loader','stylus-loader']
          },
          {
            test: /\.scss$/,
            use: extractSass.extract({
                use:[
                    {loader: "css-loader" },
                    {loader: "sass-loader" }
                ]
            })
          }
        ]
    }
}
