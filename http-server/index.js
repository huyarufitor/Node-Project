const http = require('http');
const hostname = '192.168.53.91';
const port = 5005;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    // writeHead,200 表示页面正常，text/plain 表示是文字
    res.setHeader('Content-Type','text/plain');
    // end 完成写入
    res.end('Hello World\n');
})
server.listen(port,hostname,()=>{
    console.log(`服务器运行在http://${hostname}:${port}`);
    // console.log(`服务器运行在http:/`);

})
//停止服务端接收新的连接
// server.close(()=>{
//     console.log('关闭服务器链接');
// })
// server.timeout 查看或设置超时
// server.timeout = 1000;
// console.log(server.timeout);