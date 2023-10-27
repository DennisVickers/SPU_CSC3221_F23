/* File System - Async with callbacks */

const {readFile, writeFile} = require(("fs"));

// Using callbacks
readFile("./content/first.txt", "utf8", (err,result) =>{
  // Read the first file
  // if(err) {
  //   console.log(err);
  // } else {
  //   console.log(result);
  // }

  // read both files
  if(err) {
    console.log(err);
    return;
  };
  const first = result;
  console.log("First file content:\n" + result);
  readFile("./content/second.txt", "utf8", (err,result) => {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("Second file content:\n" + result);
    const third = `${first}\n${second}`;
    writeFile("./content/third.txt", third,
      (err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log("Third file content:\n" + third);
        }
      });
  })

})