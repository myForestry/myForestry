const paths = {
  styles: {
    app: './public/src/less/app.less',
    build: './public/build/css',
    less: './public/src/less/*.less',
  },
  client: {
    jsx: './public/src/**/*.jsx',
    js: './public/src/**/*.js',
  },
};

// ----------------------
// Gulp dependencies
// ----------------------
const babel = require('gulp-babel');
const duration = require('gulp-duration');
const gulp = require('gulp');
const open = require('gulp-open');
const serve = require('gulp-serve');

// ----------------------
// CSS dependencies
// ----------------------
const autoprefixer  = require('autoprefixer');
const cssnano = require('cssnano');
const less = require('gulp-less');
const postcss = require('gulp-postcss');

// ----------------------
// Webpack
// ----------------------
const webpack       = require('webpack');
const webpackConfig = require('./webpack.config');

// ----------------------
// Task serve
// ----------------------
gulp.task('serve', ['watch:styles', 'watch:client'], serve({
  port: 3000,
  root: ['public'],
}));


// ----------------------
// Task watch:styles
// ----------------------
gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(paths.styles.less, ['build:styles']);
});

// ----------------------
// Task watch:client
// ----------------------
gulp.task('watch:client', ['build:client'], () => {
  gulp.watch([paths.client.jsx, paths.client.js], ['build:client']);
});

// ----------------------
// Task build:styles
// ----------------------
gulp.task('build:styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }),
    cssnano(),
  ];
  return gulp.src([paths.styles.app])
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.styles.build))
    .pipe(duration(console.log('Styles built successfully')));
});

// ----------------------
// Task build:client
// ----------------------
gulp.task('build:client', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new Error('build:client', err);

    console.log(stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));

    callback();
  });
});
