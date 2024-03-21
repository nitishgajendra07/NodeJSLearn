const fs= require("node:fs")



//A stream is a chunk of data moved from one point to another over time.
//Ex: A stream of data  being transferred from one file to another within the same computer
//THe idea is to work with data in chunks instead of waiting for entire data to be available at once
// streams use a buffer of size 64 kB. This is default size, we can set it explicitly in the hiWtaerMark parameter of options object
// The content is transferred in chunks over time which prevents unnecessary memory usage
// Stream is a built-in module that inherits from event emitter class.


// parameters: filePathToReadFrom, options 
console.log("start")
const readableStream= fs.createReadStream("./data.txt",{encoding:'utf-8', highWaterMark:2});
console.log("two")
readableStream.on("data",(chunk)=>{ // Note that the argument for the callback is passed in the emit() method, not by us.So it will pass the data that is read.
    console.log("chunk of data read is = ",chunk)
    writeableStream.write(chunk)
})
console.log("three")
const writeableStream= fs.createWriteStream("./data2.txt");

console.log("end")