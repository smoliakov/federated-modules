const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'application_host',
      remotes: {
        application_a: 'application_a@http://localhost:3001/remoteEntry.js',
        application_b: 'application_b@http://localhost:3002/remoteEntry.js',
        components: 'components@http://localhost:3003/components.js',
      },
      shared: ['react', 'react-dom', 'prop-types'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
