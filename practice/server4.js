// HTTP routing

const http=require("http")



const port =8004

let server= http.createServer((req,res)=>{
    // res.end(req.url)

    if(req.url==="/"){
        res.end("home")
    }
    else if(req.url==="/about"){
        res.end("Nitish Gajendra, code")
    }
    else{
        res.end("Page not found")
    }
})

server.listen(port,()=>{
    console.log("server is listening on port ", port);
})