
const http = require('http');
const hostname ='127.0.0.1';
const port = 4000;
const server =http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    res.setTimeout(1000,()=>{
        console.log('这里是1秒之后的http');
    })
    res.end('Hello Node Project\n');
});
server.listen(port,hostname,()=>{
    console.log(`a node server is running at http://${hostname}:${port}/`);
});
// server.timeout = 1000 //设置超时为1秒
// console.log(server.timeout)
server.close(()=>{
    console.log('关闭连接');
})
// 1.1 http模块
// （1）http.createServer,担当web服务器。
// （2）http.createClient,担当客户端
// 1.2 搭建http服务的步骤
//     使用 HTTP 服务器和客户端必须 require('http')
//     使用http.createServer([requestListener])来创建一个web服务器，其中传入一个可选的回调函数，这回调函数有两个参数分别代表客户端请求req与服务器端res的响应对象
//     使用 server.listen([port][, hostname][, backlog][, callback])开始在指定的 port 和 hostname 上接受连接
// 1.3 http 提供 server.timeout 设置超时和  server.close(callback) 停止服务器接收新的连接





