const path = require('path');

const SRC_PATH = path.join(__dirname, 'client/dist/index.jsx');
const OUT_PATH = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: SRC_PATH,
  output: {
    path: OUT_PATH,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}