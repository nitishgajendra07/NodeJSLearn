//HTML response
//in res.writeHead, Contrnt-Type if we do not splecify anything, it will automatically treat it like a html
// But if we specify "text/plain" it will consider it as a plaintext

// In this program we have 3 methods that can be used to return HTML response 

const http=require("http")
const fs= require("fs")


const port=8002
const server= http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})
    // res.end("<h1>Hello World</h1>") // method 1. Note that a string is being passed. But content-type is text/html

    fs.createReadStream(__dirname+"/index.html").pipe(res)   // method 2

    let html=fs.readFileSync("./index.html",'utf-8')    // method 3, used for adding dynamic values for html
    const name="Nitish"
    html=html.replace("{name}",name)
    res.end(html)


})

server.listen(port,()=>{
    console.log("server is listening on port ", port);
})