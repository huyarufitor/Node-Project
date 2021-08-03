### http 模块  主要是两个模块 ：一个是http.createServer 担当web服务器；一个是http.createClient 担当客户端。


### response对象

#### response.writeHead(statusCode, [reasonPhrase], [headers])
#### response.statusCode html页面状态值
#### response.header 返回的http header，可以是字符串，也可以是对象
#### response.setTimeout(msecs, callback)设置http超时返回的时间，一旦超过了设定时间，连接就会被丢弃
#### response.statusCode 设置返回的网页状态码
#### response.setHeader(name, value)设置http协议头
#### response.headersSent判断是否设置了http的头
#### response.write(chunk, [encoding]) 返回的网页数据，[encoding] 默认是 utf-8
#### response.end([data], [encoding])