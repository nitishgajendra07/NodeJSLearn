// JSON response

const http = require("http")

const port=8001
let server= http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"application/json"})
    const superHero={
        firstName:"Bruce",
        lastName:"Wayne" 
    }
    res.end(JSON.stringify(superHero))
})

server.listen(port,()=>{
    console.log("Server is listening on port",port )
})