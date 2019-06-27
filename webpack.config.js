const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const minCssExtract = new MiniCssExtractPlugin({
    filename: 'style.css',
  });
  return {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },

    stats: {
      entrypoints: false,
      children: false
    },

    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(ttf|svg|woff|woff2|eot|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },]
    },
    plugins: [minCssExtract],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    node: {
      fs: 'empty'
    }
  };
};
