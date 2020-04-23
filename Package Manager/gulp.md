### Gulp Packages
```js
npm install gulp --save-dev
npm install gulp-imagemin --save-dev	// Minified Images
npm install gulp-uglify --save-dev		// Minified JS
npm install gulp-sass --save-dev		// Sass Compalier
npm install gulp-concat --save-dev		// Concate JS files
```

### Global Packages to run the gulp command
```js
npm install -g gulp
npm install -g gulp-cli
```

### Message
```js
gulp.task('message', function(){
  return console.log('Gulp is Running....');
})
```

### Copy HTML for - Ready to Production State
```js
gulp.task('copyHtml', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})
```

### Optimize Images
```js
gulp.task('imageMin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);
```

### Minify JS
```js
gulp.task('minify', function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});
```

### Compile Sass
```js
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});
```

### Scripts
```js
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});
```

### Gulp Watch
```js
gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});
```

### Gulp Default task
```js
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);
```