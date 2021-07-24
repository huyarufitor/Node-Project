1.首先起一个http服务器
   ```
      const http = require('http')
      const hostname = '127.0.0.1'
      const port = 3000

      const server = http.createServer((req, res) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('Hello World\n')
      })

      server.listen(port, hostname, () => {
      console.log(`服务器运行在 http://${hostname}:${port}`)
      })`
   ```
2.处理URL请求
3. 读取文件发送给浏览器
   1. 处理文件夹
   2. 文件处理