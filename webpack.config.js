module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'dist/client.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
    ]
  }
};
