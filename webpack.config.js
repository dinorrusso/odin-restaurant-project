const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',              // Or 'production' or 'none'
  entry: './src/index.js',          // Adjust the path as needed
  output: {
    filename: 'main.js',            // Bundle filename
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|avif|webp)$/i,
        type: 'asset/resource',  // This copies image files to the output folder and returns their URLs
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // copies file to output folder and returns URL
      },
    ],
  },
};

