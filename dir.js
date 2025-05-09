const fs = require('fs')
const path = require('path')

// if(fs.existsSync('./directory')){
// fs.mkdir('./directory3',(err)=>{
//     if(err) throw err
//     console.log('Directory created')
// })
// }

// fs.mkdir('./thalaivaa1',(err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("folder created")
//     }
// })
 fs.rm('./directory3',{recursive:true},err=>{
    if(err) throw err;
    console.log("deleted the file daaa")
})

// fs.rmdir('./directory3',{recursive:true,force:true},(err)=>{
//     if(err) throw err
//     console.log('Directory deleted')
// })

fs.writeFile('./directory/file.txt',"thalapathyyyyy",(err)=>{
    if(err) throw err
    console.log('File created')
}  )

fs.readFile('./directory/file.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})