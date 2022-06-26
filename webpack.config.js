const path = require("path");
__dirname
   
module.exports = {
  mode: "development",
  entry: "./index.js", // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, "./public"), // путь к каталогу выходных файлов - папка public
    publicPath: "/",
    filename: "bundle.js" // название создаваемого файла
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    },
    port: 8081,
    compress: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{ // загрузчик для jsx
      test: /\.jsx?$/, // определяем тип файлов
      exclude: /(node_modules)/, // исключаем из обработки папку node_modules
      loader: "babel-loader", // определяем загрузчик
      options: {
        presets:[ "@babel/preset-react"] // используемые плагины
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: false,
          },
        },
        { loader: 'sass-loader' },
      ],
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],  
  }
}
