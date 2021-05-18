const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 4002;
// 解析时间的函数
function parseTime(time){
    return {
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
    }
}

function unixtime(time){
    return {
        adf:'这是时间戳',
        unixtime: time.getTime()
    }
}

const server = http.createServer((req,res)=>{
    console.log('req.url is :',req.url);
    let parsedUrl = url.parse(req.url,true);
    // 拿到请求接口的query 参数对应的时间值
    let time =new Date(parsedUrl.query.iso);

    //输出结果result
    let result;
    if(req.url=='/'){
        result = parseTime(new Date())
    }
    else if(/^\/api\/parsetime/.test(req.url)){
        result = parseTime(time)
    }
    else if(/^\/api\/unixtime/.test(req.url)){
        result = unixtime(time)
    }
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`)
})