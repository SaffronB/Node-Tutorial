var assert = require("assert");
describe("ReadFolder", function(){

    it('should find the lines syncronously', function(){
        var readFolder = require('../read-folder');
        assert.equal(11, readFolder.linesInFiles('./files/week1').length);
    });

    it('should find the lines asyncronously', function(done){
        var readFolder = require('../read-folder');
        readFolder.linesInFilesAsync('./files/week1', function(err, entries){
            assert.equal(11, entries.length);
            done();
        });
    });

});
