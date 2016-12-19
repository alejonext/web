import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import collapse from 'bundle-collapser/plugin';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import pug from 'gulp-pug';
import envify from 'envify/custom';
import sass from 'gulp-compass';

import PACK from './package.json';

const debug = false;
const DIST = './dist';

const SRC = {
	app    : './script/index.js',
	script : './script/**.js',
	view   : './view/**.pug',
	json   : './script/json/**.json',
	style  : './style/**/*.scss',
	lib    : [
		'angular',
		'angular-sanitize',
		'angular-animate',
		'angular-touch'
	]
};

const DATA = Object.assign({
	debug,
	NODE_ENV: debug ? 'development' : 'production'
}, PACK);

const render = (b, name) => {
	b
		.transform(envify(DATA))
		.plugin(collapse);

	if(!debug){
		b.transform({ global: true }, 'uglifyify');
	}

	return b.bundle()
		.pipe(source(name))
		.pipe(gulp.dest(DIST));
};

gulp.task('style', () => gulp
	.src(SRC.style)
	.pipe(sass({
		css : DIST,
		sass : SRC.style.replace('**/*.scss', '')
	}))
	.pipe(gulp.dest(DIST)));

gulp.task('fonts', () => gulp
	.src(SRC.fonts)
	.pipe(gulp.dest(DIST)));

gulp.task('lib', () => {
	var b = browserify({ debug });
	
	SRC.lib.forEach((lib) => b.require(lib));

	return render(b, 'lib.js');
});

gulp.task('script', () => render(browserify({
		entries: SRC.app,
		debug
	})
	.external(SRC.lib)
	.transform(babelify, {
		sourceMaps: debug,
		sourceMapsAbsolute: false,
		presets : [ 'es2015', 'stage-0', 'stage-2' ], 
		plugins : ['transform-object-assign', 'transform-es5-property-mutators'],
		comments : debug,
		compact : debug,
		minified : !debug
	}), 'app.js' ));

gulp.task('template', () => gulp
		.src(SRC.view)
  		.pipe(pug({ locals : DATA }))
		.pipe(gulp.dest(DIST)));

gulp.task('watch', () => {
	gulp.watch(SRC.view, ['template']);
	gulp.watch(SRC.script, ['script', 'lib' ]);
	gulp.watch(SRC.json, ['script' ]);
	gulp.watch(SRC.style, ['style' ]);
});

gulp.task('default', ['script', 'lib', 'template', 'style' ]);