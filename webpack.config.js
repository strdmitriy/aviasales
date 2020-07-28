const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        loader: "file-loader?name=assets/fonts/[name].[ext]"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, "./src/helpers/"),
      ui: path.resolve(__dirname, "./src/ui/"),
      assets: path.resolve(__dirname, "./src/assets/")
    },
    extensions: [".jsx", ".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style-[hash].css",
      allChunks: true
    })
  ],
  watch: true
};