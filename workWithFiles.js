var fs = require('fs'),
	path = require('path');




console.log(process.cwd());


// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log( i + ": " + item + " (массив:" + arr + ")" );
// });


fs.readdir('myFolder', function(err, files){
	if (files) {
		files.forEach(function(file){

			console.log(file)
			var ext = path.extname(file)
			console.log(ext)
			var basename = path.basename(file, ext)
			console.log(basename)

		})
	} else {
		console.log("Catalog doesn't finde")
	}
})

//AppSuperAdmin