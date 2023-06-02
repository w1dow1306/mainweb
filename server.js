const express = require("express");
const port = 80;
const host = "htpp://localhost";
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname)));

app.get("/:name", (req, res) => {
  // console.log(__filename);
  res.sendFile(__dirname + "\\html\\"+req.params.name+".html");
});
app.get("/", (req, res) => {
console.log("hello")
  res.sendFile(__dirname + "\\html\\web.html");
});
app.listen(port, () => {
  console.log("Server is up and running");
  console.log("link= "+"htttp://localhost:80/")
});

//THis is the server don't change anything ig idk
//install nodejs also
////Run the test.bat using "./test" command in powershell and the server will run 