const {Transform}=require("stream")


const stringTr = new Transform({
    transform(chunk, encoding, callback) {
        
        let data;
    try {
      data = JSON.parse(chunk);
      console.log(data,"data")
    //   for(let line in data){
    //     console.log(line,"line")
    //     data[line]=new Date().toString()
    //   }
      

      
    } catch (err) {
      console.log(err);
    }
    
    //   this.push(chunk.toString().toUpperCase());
    console.log(data,"data")
      this.push(JSON.stringify(data));

      callback();
    }
  });
  

  process.stdin.pipe(stringTr).pipe(process.stdout)