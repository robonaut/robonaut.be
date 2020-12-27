import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { routeDefinitions } from "./src/routes";
import { renderStatic } from "./src/server";

const configuration: webpack.Configuration = {
  entry: {
    app: ["./src/index.tsx"],
  },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.md?$/,
        use: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: "src/assets", to: "assets" }] }),
    ...routeDefinitions.map(
      ({ path, title }: { path: string; title: string }) =>
        new HtmlWebpackPlugin({
          filename: path === "/" ? "index.html" : `${path.slice(1)}/index.html`,
          template: "src/index.html",
          favicon: "src/favicon.ico",
          templateParameters: {
            title,
            ...renderStatic(path),
          },
          inject: true,
          scriptLoading: "defer",
        })
    ),
    new webpack.DefinePlugin({
      "process.env.APP_ENV": JSON.stringify("browser"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  target: "web",
};

const developmentConfig: webpack.Configuration = {
  ...configuration,
  output: {
    ...configuration.output,
    filename: "js/[name].[fullhash].js",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    inline: true,
    port: 3030,
    open: true,
  },
};

const productionConfig: webpack.Configuration = {
  ...configuration,
  mode: "production",
  output: {
    ...configuration.output,
    filename: "js/[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

const webpackConfig: webpack.Configuration =
  process.env.NODE_ENV === "production" ? productionConfig : developmentConfig;

export default webpackConfig;
