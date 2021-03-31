const mix = require("laravel-mix");
require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
  optimization: {
    concatenateModules: false,
    providedExports: false,
    usedExports: false,
  },

  output: {
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "./public"),
  },
});

mix
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css")
  .options({
    postCss: [require("tailwindcss")],
  })
  .purgeCss({
    extend: {
      whitelist: [
        "text-teal-700",
        "text-base",
        "text-blue-600",
        "text-gray-700",
        "max-content",
      ],
      whitelistPatterns: [/bg-.+\-(600|700|800|900)/],
    },
  })
  .version();
