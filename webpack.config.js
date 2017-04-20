module.exports = {
  entry: "./app.tsx",
  output: {
    filename: "./dist/bundle.js"
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.tsx$/, use: ["awesome-typescript-loader"] },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
