module.exports = {
  entry: "./app.tsx",
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.tsx$/,
        use: ["ts-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react"]
          }
        }
      }
    ]
  }
}
