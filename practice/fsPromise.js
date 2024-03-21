// const { log } = require("console")
const fs= require("node:fs")


// parameters- path, {encoding, flag}
fs.readFile("data.txt",'utf-8', (err,data)=>{
    if(err){
        console.log("error is",err);
    }
    else{
        console.log(data)
    }
}) 
// .then((response)=>{
//     console.log("then",response)
// })
