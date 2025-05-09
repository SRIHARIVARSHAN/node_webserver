const fs=require('fs')
const path = require('path')

const rs= fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),'utf8')
const ws= fs.createWriteStream(path.join(__dirname,'files','newbigfile.txt'))


rs.on('data',(dc)=>{
    ws.write(dc)
})

//rs.pipe(ws)
rs.on('end',()=>{
    console.log("file copied")
})