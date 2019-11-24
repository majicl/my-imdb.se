const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = (env_props, options) => {
  const env = options.mode === 'production' ? 'prod' : 'dev';
  return {
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: env === 'dev' ? '/' : '/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      port: 3007
    },
    plugins: [htmlPlugin]
  };
};
