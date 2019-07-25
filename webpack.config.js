const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/component/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./assets/dist/js"),
    library: "[name]",
    libraryExport: "",
    libraryTarget: "var"
  }
};
