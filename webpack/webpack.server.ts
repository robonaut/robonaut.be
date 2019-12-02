import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

module.exports = (): WebpackDevServer => {
  var defaultOptions: WebpackDevServer.Configuration = {
    // filename: webpackConfig.output.filename,
    contentBase: './src',
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    open: true,
  };
  return new WebpackDevServer(webpack(webpackConfig), defaultOptions);
};
