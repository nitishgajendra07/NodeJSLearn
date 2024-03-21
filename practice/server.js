const http= require("http")


let server= http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("hello world")
})

server.listen(8000,()=>{
    console.log("server listening on port 8000");
})