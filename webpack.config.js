module.exports = {
  stats: {
    errors: true,
    errorStack: true,
    errorDetails: true, // --display-error-details
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translate CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // run post CSS actions
            options: {
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')]
              },
            },
          },
          {
            loader: 'sass-loader', // compile Sass to CSS
          },
        ],
      },
    ],
  },
}
