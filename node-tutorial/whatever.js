var test = require('./read-folder');
var callback = function (error, result){
  console.log(result)
}

test.linesInFilesAsync(callback);
