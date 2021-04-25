// require 指令载入http模块
var http = require('http');
// createServer创建服务器
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World \n');
}).listen(1010);
console.log('server running at http://127.0.0.1:1010/');
