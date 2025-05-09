const {format}=require('date-fns')
const {v4}=require('uuid')
const fsp=require('fs').promises
const fs=require('fs')
const path=require('path')
const func= async(m)=>{
    const dt= format(new Date(),'cc-mm-yyyy\tHH:mm:ss')
    const ltm=`${dt}\t${v4()}\t${m}\n`
    console.log(ltm)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsp.mkdir(path.join(__dirname,'logs'))
        }
        await fsp.appendFile(path.join(__dirname,'logs','logfile.txt'),ltm)
        // await fsp.rm(path.join(__dirname,'logs'),{recursive:true})
    }catch(err){
        console.error(err)
    } 
}

const evemit=require('events')

class MyEmitter extends evemit{}
const myEmitter=new MyEmitter()
myEmitter.on('lodg',(csk)=>{
    func(csk);
})
myEmitter.emit('lodg',`\tDone ehhh`)

