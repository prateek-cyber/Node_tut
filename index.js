const fs = require('fs');
console.log("Hii")
console.warn(2+3);
// import {x} from './app' 
 var x = '20';

if(x===20){
    console.log("Matched");
}
const app = require('./app')
var arr = [1,2,3,4,4,5];
console.log(arr[0]);
console.log(app.z())
const result = arr.filter((item)=>{
    return item>3;
})
console.log(result)
// fs.writeFileSync("Hello.txt","This is hello.txt file");
// console.log(fs);

//Creating http server


const http = require('http');
// http.createServer((req,res)=>{
//     res.write("hi this is prateek");
//     res.end();
// }).listen(4500)

//Can do it in this way also

function DataControl(req,res){
    res.write("This is prateek");
    res.end();
}
http.createServer(DataControl).listen(4500);

console.log("Nodemon running")

//creating files in loop in a new folder
const path = require('path');
// console.log(__dirname);
const dirpath = path.join(__dirname,'files');
console.log(dirpath); 
for(var i = 0; i < 5; i++){
    fs.writeFileSync(dirpath+"/Hello"+i+".txt",'a simple text file');
}
fs.readdir(dirpath,(err,files)=>{
    files.forEach(element => {
        console.log(element);
    });
})