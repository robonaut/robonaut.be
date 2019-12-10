import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { renderStatic } from '../src/App';
import { routeDefinitions } from '../src/routes';

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
  plugins: Object.keys(routeDefinitions).map(
    routePath =>
      new HtmlWebpackPlugin({
        filename:
          routePath === '/'
            ? 'index.html'
            : path.join(routePath.slice(1), 'index.html'),
        template: 'src/index.html',
        favicon: 'src/favicon.ico',
        templateParameters: renderStatic(routePath),
        inject: true,
      })
  ),
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
