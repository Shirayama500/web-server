const express = require('express')

const path = require("path")
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//     console.log(req);
//   res.send('<h1>Hello World!!<h1>')
// })

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if(answer === "2"){
    res.send("正解")
  }else{
    res.send("不正解")
  }
  });

app.get("/api", function (req, res) {
  console.log(req);
    res.send({
        name: "Mike",
        age: 30
    });
  });

  const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log("I am running")
});