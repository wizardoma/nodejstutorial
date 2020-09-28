var fs = require('fs');
var data = fs.readFile('test.txt', function (error,data) {
    if (error) {
        console.log(error)
    }

    else {
        console.log(data.toString());
    }

});
console.log("Ended here")