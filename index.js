const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'crud');
const filepath = dirpath+"/hello.txt";

//creating file
// fs.writeFileSync(dirpath+"/hello.txt",'Hello file')

//Reading the file

// fs.readFile(filepath,'utf8',(err,file)=>{
//     console.log(file);

// })

//Adding data to the file


// fs.appendFile(filepath,' And file name is hello.txt',err=>{
//     if(!err){
//         console.log("File is updated");
//     }
// });

// Renaming the file

// fs.rename(filepath,dirpath+"/apple.txt",(err)=>{
//     if(!err){
//         console.log("File renamed succesfully");
//     }
// })

//Deleting the file

// fs.unlinkSync(dirpath+"/apple.txt");