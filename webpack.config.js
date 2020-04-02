const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const target = process.env.TARGET;
const mode = target === 'dev' ? 'development' : 'production';
const entry = path.resolve(__dirname, target === 'dist' ? 'src/index.ts' : 'test/index.ts');
const output = {
  dev: {
    filename: 'index.dev.[hash].js',
    path: path.resolve(__dirname, 'build'),
    hashDigestLength: 6
  },
  dist: {
    filename: 'index.dist.js',
    path: path.resolve(__dirname, 'dist'),
    hashDigestLength: 6
  },
  docs: {
    filename: 'index.docs.[hash].js',
    path: path.resolve(__dirname, 'docs'),
    hashDigestLength: 6
  }
};
const tsconfigFile = {
  dev: path.resolve(__dirname, 'tsconfig.dev.json'),
  dist: path.resolve(__dirname, 'tsconfig.dist.json'),
  docs: path.resolve(__dirname, 'tsconfig.docs.json')
};
const plugins = [
  new CleanWebpackPlugin()
];
if (target === 'dev' || target === 'docs') {
  plugins.push(new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'test/index.html') }));
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

const config = {
  mode: mode,
  entry: entry,
  output: output[target],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: tsconfigFile[target]
        }
      }
    ]
  },
  plugins: plugins
};

if (target === 'dev') {
  config.devtool = 'source-map';
}

module.exports = config;