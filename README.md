# gulp-file64 [![Build Status](https://travis-ci.org/rakesh0r/gulp-file64.png)](https://travis-ci.org/rakesh0r/gulp-file64)

Convert and replace image-files within your DOM/HTML to base64-encoded data.

## Example

##### gulpfile.js

```js
var gulp = require('gulp');
var file64 = require('gulp-file64');

gulp.task('default', function () {
	gulp.src('index.html')
		.pipe(file64())
		.pipe(gulp.dest('path'));
});
```


##### index.html // Before...

```js
<html>
	<head>
	</head>
	<body>
		<img src="sample.png" />
...
```




### License

MIT © rakesh0r
