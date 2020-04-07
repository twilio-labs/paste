import * as gulp from 'gulp';
import * as theo from 'theo';
import gulpTheo from 'gulp-theo';
import del from 'del';
import {sketchpaletteTokenFormat} from './formatters/sketchpalette';
import {gatsbyJsonTokenFormat} from './formatters/gatsby.json';
import {es6TokenFormat} from './formatters/es6';
import {dTSTokenFormat} from './formatters/d.ts';
import {commonTokenFormat} from './formatters/common';

// Browsersync isn't typed correctly so we import the old way
const browserSync = require('browser-sync');

const paths = {
  aliases: './tokens/aliases',
  dist: './dist',
  docs: './docs',
  formatters: './formatters',
  globals: './tokens/global',
  tokensDir: './tokens',
  tokensEntry: './tokens/**/tokens.yml',
};

theo.registerFormat('common.js', commonTokenFormat);
theo.registerFormat('es6.js', es6TokenFormat);
theo.registerFormat('common.d.ts', dTSTokenFormat);
theo.registerFormat('es6.d.ts', dTSTokenFormat);
theo.registerFormat('sketchpalette', sketchpaletteTokenFormat);
theo.registerFormat('gatsby.json', gatsbyJsonTokenFormat);
theo.registerTransform('web', ['color/rgb']);

gulp.task('clean', () => del([paths.dist]));

gulp.task('tokens:less', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'less'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:css-custom-props', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'custom-properties.css'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:scss', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'default.scss'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:scssmap', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'map.scss'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:json', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'json'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:ios', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'ios'},
        format: {type: 'ios.json'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:android', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'android'},
        format: {type: 'android.xml'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:raw', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'raw'},
        format: {type: 'raw.json'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:sketchpalette', () =>
  gulp
    .src(`${paths.tokensDir}/**/sketch.yml`)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'sketchpalette'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:commonjs', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'common.js'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:es6', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'es6.js'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:common:dts', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'common.d.ts'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:es6:dts', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'es6.d.ts'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('tokens:gatsby', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web', includeMeta: true},
        format: {type: 'gatsby.json'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.dist))
);

gulp.task('docs', () =>
  gulp
    .src(paths.tokensEntry)
    .pipe(
      gulpTheo({
        transform: {type: 'web'},
        format: {type: 'html'},
      })
    )
    .on('error', (err: string) => {
      throw new Error(err);
    })
    .pipe(gulp.dest(paths.docs))
);

gulp.task(
  'tokens:all',
  gulp.parallel(
    'tokens:less',
    'tokens:css-custom-props',
    'tokens:scss',
    'tokens:scssmap',
    'tokens:json',
    'tokens:commonjs',
    'tokens:common:dts',
    'tokens:es6',
    'tokens:es6:dts',
    'tokens:ios',
    'tokens:android',
    'tokens:raw',
    'tokens:sketchpalette',
    'tokens:gatsby'
  )
);

gulp.task('browsersync', () =>
  browserSync({
    open: false,
    notify: false,
    server: 'docs',
    startPath: 'tokens.html',
  })
);

gulp.task('watch', () => {
  gulp.watch([`${paths.aliases}/**/*.*`, `${paths.globals}/**/*.*`], gulp.series('tokens:all', 'docs'));
  gulp.watch([`${paths.docs}/**/*.*`]).on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('clean', 'tokens:all', 'docs', gulp.parallel('watch', 'browsersync')));

gulp.task('default', gulp.series('clean', 'tokens:all', 'docs'));
