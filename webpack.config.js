const {VueLoaderPlugin }= require('vue-loader');
module.exports={
    entry:'./src/public/indexvue.js',
    output:{
        path:__dirname + '/src/public/build',
        filename:'bundle.js',
        
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }, 
            {
                test:/\.css$/,
                use:'css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|JPG)$/,
                loader: 'file-loader'
            }  
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]

};