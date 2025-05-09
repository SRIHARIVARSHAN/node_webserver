const m=require('./math')
const od = require('os')
const path = require("path")
const fsp=require("fs").promises

const fileop = async()=>{
    try{
        //reading the file
        const data= await fsp.readFile(path.join('C:','Users','sriha','OneDrive','Desktop','Git-Basic Commands.txt'),'utf8')
        console.log("file read")
        console.log("Content : ",data)
        console.log("******************")

        //writing the file
        await fsp.writeFile(path.join(__dirname,'files','summer.txt'),"semma veyilll uhhh")
        console.log("file written")
        const r=await fsp.readFile(path.join(__dirname,'files','summer.txt'),'utf-8')//reading the written content
        console.log("Content : ",r)
        console.log("******************")

        //appending the file
         await fsp.appendFile(path.join('C:','Users','sriha','OneDrive','Desktop','Git-Basic Commands.txt')," \n\n  koluthi edukkuthu")
        console.log("file appended")
        const a=await fsp.readFile(path.join('C:','Users','sriha','OneDrive','Desktop','Git-Basic Commands.txt'),'utf-8')//reading the appended content
        console.log("Content : ",a)
        console.log("******************")

        //renaming the file
        await fsp.rename(path.join(__dirname,'files','summerehh.txt'),path.join(__dirname,'files','summerehh.txt'))
        console.log("file renamed")
        const rename=await fsp.readFile(path.join(__dirname,'files','summerehh.txt'),'utf-8')
        console.log("Content : ",rename)
        console.log("******************")

        //deleting the file
        // 
        // await fsp.unlink(path.join(__dirname,'files','clg.txt'))
        console.log("file deleted")
        //console.log("Content :",s)

    }
    catch(err){
        console.log("-----------------------------------------------------------------")
        console.error("The error is : ",err)
    }
}

fileop()

process.on('uncaughtException', (err) => {
    console.log('There was an uncaught error', err);
    process.exit(1);
  })
