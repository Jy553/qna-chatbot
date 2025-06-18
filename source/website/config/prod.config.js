
const ZipPlugin = require('zip-webpack-plugin');
module.exports = {
    mode: 'production',
    plugins:[
        new ZipPlugin({
            path: '../../build',
            filename: 'website.zip',
        })
    ]
}

        
