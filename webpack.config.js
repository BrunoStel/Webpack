const path = require ('path')

module.exports = {
    entry:{
           index:'./src/index.js',
           exemplo: './src/exemplo.js'
          },
    output:{
        filename:'assets/js/[name].bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    mode:'production',
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif|svg)$/, 
                use:[
                    {loader:'file-loader',
                     
                    options:{
                         name:'assets/images/[name].[ext]'
                        } 
                    }
               ]
                   
            },
            {test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
}