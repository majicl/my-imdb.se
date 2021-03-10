const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3007,
  },
  output: {
    publicPath: 'http://localhost:3007/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, 'src/components'),
      handlebars: 'handlebars/dist/handlebars.js',
    },
  },
  devtool: 'source-map',
  plugins: [htmlPlugin],
};
