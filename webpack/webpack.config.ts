import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { renderHtml } from '../src/App';
import webpack from 'webpack';

const configuration: webpack.Configuration = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(antd)\/).*/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Robonaut',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      app: renderHtml().app,
      inject: true,
    }),
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  target: 'web',
};

const developmentConfig: webpack.Configuration = {
  ...configuration,
  mode: 'development',
  devtool: 'source-map',
};

const productionConfig: webpack.Configuration = {
  ...configuration,
  mode: 'production',
};

const webpackConfig: webpack.Configuration =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

export default webpackConfig;
