var fs = require('fs');
// 阻塞代码 按照顺序执行。在文件读完后才执行程序
// var data =fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('执行结束');
// 非阻塞代码 不需要按照顺序。在读取文件的同时执行接下来的代码
fs.readFile('input.txt',function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log(5+6);