// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js')
    .sass('src/scss/app.scss', 'dist/css')
    .setPublicPath('./')
    .browserSync({
        files: ["src/**/*.*", "*.html"],
        proxy: "http://localhost:8080/"
    });