const HtmlWebPackPlugin = require("html-webpack-plugin");

 const htmlWebpackPlugin = new HtmlWebPackPlugin({
   template: "./src/index.html",
   filename: "./index.html",
   favicon: "./src/images/favicon-32x32.png"
 });

module.exports = {
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.(png|jpe?g|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
