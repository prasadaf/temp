// Os module
// const os=require('os')

// // info about current user
// const user=os.userInfo()
// console.log(user);

// // The time for which the system is operational without interuption-> System uptime
// console.log(`The system uptime is ${os.uptime()} seconds. `);

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);
// *************************************************************
// Path module

// const path=require('path');
// console.log(path.sep);

// const filePath=path.join('/content','subfolder','text.txt');
// console.log(filePath);
// const base =path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

// *****************************************************************
// const fs=require('fs');
// // const {readFileSync,writFileSync}= require('fs');
// const first=fs.readFileSync('./first.txt','utf-8');
// const second=fs.readFileSync('./second.txt','utf-8');

// // console.log(first,second);
// // fs.writeFileSync('./result-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'});
// console.log("start");
// fs.readFile('./first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const first=result;
//     fs.readFile('./second.txt','utf-8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const second=result;
//         fs.writeFile('./result-async.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log("done with the task");
//         });
//     });

     
// });
// console.log("starting next task");
// *******************************************************************

// const http=require('http');

// const server=http.createServer((req,res)=>{
//     // console.log(req);
//     if(req.url==='/'){
//         res.end ('Welcome to our homepage.');
//     }
//     if(req.url==='/about'){
//         req.end('Here is our home page.');
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
    
//     `);

// });

// server.listen(5000);

// **************************************************************
const _=require('lodash');
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems); 
