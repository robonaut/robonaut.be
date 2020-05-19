import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';3
import webpack from 'webpack';
import { renderStatic } from './src/App';
import { routeDefinitions } from './src/routes';

const configuration: webpack.Configuration = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(md)$/i,
        use: 'raw-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    ...routeDefinitions.map(
      ({ path, title }: { path: string; title: string }) =>
        new HtmlWebpackPlugin({
          filename: path === '/' ? 'index.html' : `${path.slice(1)}/index.html`,
          template: 'src/index.html',
          favicon: 'src/favicon.ico',
          templateParameters: {
            title,
            ...renderStatic(path),
          },
          inject: true,
        })
    ),
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  target: 'web',
  node: { fs: 'empty' },
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    open: true,
  },
};

const developmentConfig: webpack.Configuration = {
  ...configuration,
  output: {
    ...configuration.output,
    filename: 'js/[name].[hash].js',
  },
  mode: 'development',
  devtool: 'source-map',
};

const productionConfig: webpack.Configuration = {
  ...configuration,
  mode: 'production',
  output: {
    ...configuration.output,
    filename: 'js/[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

const webpackConfig: webpack.Configuration =
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;

export default webpackConfig;
