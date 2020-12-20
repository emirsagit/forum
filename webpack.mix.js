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

mix.js("resources/js/app.js", "public/js")
    .extract(["vue"])
    .version()
    .postCss("resources/css/app.css", "public/css")
    .options({
        postCss: [require("tailwindcss")]
    })
    .purgeCss({
        extend: {
            content: [path.join(__dirname, 'vendor/spatie/menu/**/*.php')],
            whitelist: ['text-teal-700', 'text-base', 'text-blue-600', 'text-gray-700', 'max-content'],
            whitelistPatterns: [/bg-.+\-(600|700|800|900)/],
        },
    });
