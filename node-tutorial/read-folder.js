var fs = require("fs");
//Calling file syncronously
//takes folderName as a parameter and returns an Array


var readingFile = function(folderName){
    var fileNames = fs.readdirSync(folderName);
    var contentsArray = [];

    fileNames.forEach(function(file) {
      var contents = fs.readFileSync(folderName + "/" + file, 'utf8');
      var words = contents.split('\n');
      words.forEach(function(item, array) {
        contentsArray.push(item);
      });
    });

    return contentsArray;
  }
exports.linesInFiles = readingFile;

  // linesInFilesAsync which takes two parameters folderName and callback 2 parameters err & files:
exports.linesInFilesAsync= function (folderName, callback){
callback (null, readingFile(folderName));
}
