var babelify = require('babelify')
var browserify = require('browserify')
var browserSync = require('browser-sync')
var buffer = require('vinyl-buffer')
var gulp = require('gulp')
var node = require('node-dev')
var source = require('vinyl-source-stream')

function errorHandler(err) {
    console.log('Error: ' + err.message)
}

// 自動ブラウザリロード
gulp.task('browser-sync', function () {
    browserSync({
        proxy: {
            target: 'http://localhost:3000/src/index.html'
        },
        port: 8080
    })
})

// Javascriptへのビルド
gulp.task('build', function () {
    browserify({ entries: ['./src/index.js'] })
        .transform(babelify)
        .bundle()
        .on('error', errorHandler)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({ stream: true }))
})

// ローカルサーバーの起動
gulp.task('server', function () {
    node(['./server.js'])
})

// ファイル監視
// ファイルに更新があったらビルドしてブラウザをリロードする
gulp.task('watch', function () {
    gulp.watch('./src/*.js', ['build'])
    gulp.watch('./src/components/*.js', ['build'])
    gulp.watch('./src/*.html', ['build'])
})

// gulpコマンドで起動したときのデフォルトタスク
gulp.task('default', ['server', 'build', 'watch', 'browser-sync'])