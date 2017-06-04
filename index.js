var sass 	= require('node-sass');
var fs		= require('fs');
var path 	= require('path');

sass.render({
	file: path.join(__dirname, '/css/sass/main.scss'),
	outFile: path.join(__dirname, '/css/styles.css')
}, function(error, results) {
	const outfile = this.options.outFile;
	if(!error) {
		fs.writeFile(outfile, results.css, fsError => {
			if(fsError)	console.log(fsError);
			console.log('Done Generating!');
		});
	} else 
		console.log(error);
});