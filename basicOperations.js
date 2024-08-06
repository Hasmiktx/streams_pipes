const fs = require("fs");


const readableStream= fs.createReadStream("./text1.txt")
const writeableStream=fs.createWriteStream("./text2.txt")


readableStream
.on("data",(chunk)=>{
    console.log(chunk.toString())
    writeableStream.write(chunk)
})
.on("end",()=>{
   writeableStream.end();
   console.log("end")
})
.on("error",(err)=>{
    console.log(`while writing file: ${err}`)
})


// readableStream.pipe(writeableStream)
// readableStream
// .on("end",()=>{
//     console.log("file has been written")
// })
// .on("error",(err)=>{
//     console.log(err)
// })