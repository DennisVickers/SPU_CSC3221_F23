/* File System - Async with async-await */
const {readFile, writeFile, promises} = require("fs");

async function start() {
  try {
    const first = await promises.readFile("./content/first.txt","utf8");
    const second = await promises.readFile("./content/second.txt","utf8")
    const third = `Third file content:\n${first}\n${second}`;
    await promises.writeFile("./content/third.txt",third);
  } catch (error) {
    console.log(error);
  }
}

start();
