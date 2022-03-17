const express = require('express');
const path = require('path')
const app = express();

// app.get('',(req,res)=>{
//     // console.log("Data sent by browser", req.query.name);
//     res.send("Welcome to home page "+req.query.name);
// })

app.get('/about',(req,res)=>{
    res.send(`
      <input type = "text" placeholder = "username" value=${req.query.name}>
    `)
    res.send("Hello this is about our page");
})
const publicPath = path.join(__dirname,"/public");
// app.use(express.static(publicPath));
app.get('',(req,resp)=>{
  resp.sendFile(`${publicPath}/index.html`)// By this no need to use .html to access pages from web
})
app.get('*',(req,resp)=>{
  resp.sendFile(`${publicPath}/error.html`)// if a non existing page is accessed then this is executed
})


app.listen(4500);