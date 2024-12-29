const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      images: path.resolve(__dirname, "src", "assets", "images"),
      svgs: path.resolve(__dirname, "src", "assets", "svg"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["ts-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
};
