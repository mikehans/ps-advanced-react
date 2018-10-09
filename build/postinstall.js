var mkdirp = require('mkdirp');
var path = require('path');
var chalk = require('chalk');

var publicPath = path.resolve(path.join(__dirname, 'public'));

mkdirp(publicPath, function(err){
    if(err){
        console.error(err);
    } else{
        console.log(chalk.green("Created ./public\n"));
    }

});
