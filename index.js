'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

module.exports = function() {

	// create a stream through which each file will pass
	return through.obj(function(file, enc, callback) {

		if (file.isNull()) {
			this.push(file);
			// do nothing if no contents
			return callback();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-file64', 'Streaming not supported'));
			return callback();
		}

		if (file.isBuffer()) {
			var simg64 = new Buffer(String(file.contents).replace('../css/app.css','').replace(/&lt;#/g, '<#').replace(/&gt;</g, '><').replace(/&lt;\/\#/g, '</#').replace(/&#x3D;/g, '=').replace(/&quot;/g, '"')).toString('base64');
			file.contents = new Buffer(simg64);

			return callback(null, file);
		}
	});
};
