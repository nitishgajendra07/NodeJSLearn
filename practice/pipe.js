const fs= require("node:fs")

console.log("start")
const readableStream= fs.createReadStream("./data.txt",{encoding:'utf-8', highWaterMark:2});
console.log(readableStream)
console.log("two")
// readableStream.on("data",(chunk)=>{ // Note that the argument for the callback is passed in the emit() method, not by us.So it will pass the data that is read.
//     console.log("chunk of data read is = ",chunk)
//     writeableStream.write(chunk)
// })
console.log("three")
const writeableStream= fs.createWriteStream("./data2.txt");

let some=readableStream.pipe(writeableStream)
console.log(writeableStream)


console.log("end")