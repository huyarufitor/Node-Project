const fs = require('fs');
// 异步读取。异步方法性能更高，速度更快，而且没有阻塞==>推荐使用异步方法
// fs.readFile('README.md',function(err,data){
//     if(err){
//         return console.error(err)
//     }else{
//         console.log("异步读取文件：\n"+data.toString());
//     }
// })
// 同步读取文件内容
const data = fs.readFileSync('README.md');
console.log('同步读取：没有回调函数\n'+data.toString());
console.log('程序执行完毕');
