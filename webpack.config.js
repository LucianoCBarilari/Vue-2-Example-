const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Puedes cambiar a 'production' según corresponda
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
    publicPath: '/' // Ruta base del proyecto para el servidor de desarrollo
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192, // Si el archivo es más pequeño que 8kB, lo convierte en una URL de datos
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]', // Nombre del archivo de salida con hash para evitar caché
              outputPath: 'assets/', // Carpeta de salida dentro de 'dist'
              publicPath: 'assets/' // Ruta pública para las imágenes en la aplicación
            }
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias para importaciones de archivos dentro de 'src'
    },
    extensions: ['.js', '.vue'] // Extensiones que Webpack resolverá automáticamente
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Plantilla HTML de origen
      filename: 'index.html' // Nombre del archivo HTML de salida
    })
  ]
};
