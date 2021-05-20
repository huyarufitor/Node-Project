const http = require('http');
const url =require('url');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4004;
const server = http.createServer((req,res)=>{
    // res.statusCode =200;
    // res.setHeader('Content-type','text/plain');
    // res.end('Hello file server!this is updated by pm2 on time\n\n');
    if(req.url =='/favicon.ico') return ;//不响应favicon请求
    //获取url -> pathname 文件名
    let pathname =path.join(__dirname,url.parse(req.url).pathname);
    pathname = decodeURIComponent(pathname); //先给url 解码
    console.log(pathname);
    /**
     * 判断文件是否是文件夹
     * 是：返回文件列表
     * 否：读取文件内容
     * stat方法的参数是一个文件或目录，它产生一个对象，该对象包含了该文件或者目录的具体信息。
     * 我们可以用这个方法，去判断正在处理的是一个文件还是一个目录，同步用stat,异步是用fs.statSync
     * 
     */
     if(fs.statSync(pathname).isDirectory()){
        // 设置响应头
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.readdir(pathname, (err, files)=>{
            res.write('<ul>');
            files.forEach((item)=>{
              	// 处理路径
                let link = path.join(url.parse(req.url).pathname, item);
                res.write(`<li><a href="${link}">${item}</a></li>`);
            })
            res.end('</ul>');
            return res;
        })
    }
})

server.listen(port,hostname,()=>{
    console.log('这里是运行在后台的');
    console.log(`服务器运行在http://${hostname}:${port}`);
})