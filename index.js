// Demonstration of promise
//When we need the data of a process which takes more time to execute in the next code 
// we use promise to get that data because node dosen't wait for a process taking long time


let a = 20;
let b = 0;
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(30);
},2000)
     
})

waitingData.then((data)=>{
    console.log(a + data);
})
console.log("End");