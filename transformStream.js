const {Transform}=require("stream")


const stringTr = new Transform({
    transform(chunk, encoding, callback) {
        // console.log(chunk)
      this.push(chunk.toString().toUpperCase());
      this.push(`timestamp:${new Date()}`);

      callback();
    }
  });
  

  process.stdin.pipe(stringTr).pipe(process.stdout)