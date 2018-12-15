const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    monaco: './esm.js',
    monacoEditor: 'monaco-editor/esm/vs/editor/editor.api'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/esm'),
    libraryTarget: 'umd',
    library: 'monaco'
  },
  resolveLoader: {
    alias: {
      'blob-url-loader': require.resolve('./loaders/blobUrl'),
      'compile-loader': require.resolve('./loaders/compile')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new MonacoWebpackPlugin()]
}
