const http=require('http')
const fs= require('fs')
const path=require('path')

const port=3500

const server= http.createServer((req,res)=>{
    let file=" ";
    if(req.url=='/'||req.url=='/index'){
        file='index.html'
    }
    else if(req.url=='/home'){
        file='home.html'
    }
    else if(req.url=='/car'){
        file='car.html'
    }
    else if(req.url=='/work'){
        file='work.html'
    }
    else{
        file='404.html'
    }

    if(file){
        fs.readFile(path.join(__dirname,file),(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"})
                res.end("500 Internal Server Error")
            }
            else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(data)
            }
        })   
    }
    else{
        fs.writeHead(404,{"content-type":"text/plain"})
        res.end("404 Not Found")
    }
})

server.listen(port,(err)=>{
    console.log(`Server is running on port ${port}`)
})