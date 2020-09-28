var fs = require("fs");
var events = require("events");

var emitter = new events.EventEmitter();

 fs.readFile("test.txt", (error, data) => {
    emitter.emit("readFile", error, data);
})

emitter.on("readFile", (error, data) => {
    console.log(data.toString())
})