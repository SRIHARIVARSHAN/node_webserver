const readline=require('readline')
const fs=require('fs')
const path=require('path')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Whats your name???\n",(sollu)=>{
    console.log(`vanakkam da ${sollu}!`)
    fs.appendFile(path.join(__dirname,'logs','qn.txt'),`${sollu}`+'\n',(err)=>{
        if(err){
            console.log("Error in writing file")
        }
        else{
            console.log("File written successfully")
        }
        fs.readFile(path.join(__dirname,'logs','qn.txt'),'utf-8',(err,data)=>{
            if(err){
                console.log("Error in reading file")
            }
            else{
                console.log("Content : ",data)
            }
        })
        rl.close()
    })
})