// Modules
const express = require("express");
const connectDB = require("./connect");

const port = 8080;
const appName = "Task Manager";
const app = express();

// Middleware
app.use(express.json());

// Data model (schema)
const tasks = require("./Task");

// get all the tasks
app.get("/tm/tasks", async (req,res)=>{
  try {
    const task = await tasks.find(); 
    res.status(200).json({task});
  } catch {
    res.status(500).json({msg: error});
  };
});

// Connect to the database and start the appl server
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {console.log(`${appName} is listening on port ${port}.`)});
  } catch (error) {
    console.log(error);
  };
}

start();
