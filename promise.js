//使用promise 来实现连续读三个md文件内容 :then 返回了一个 promise，因此我们可以将 then 的调用不停地串连起来。其中 then 返回的 promise 装载了由调用返回的值。
//引入 fs 模块
const fs = require('fs')
//闯将Promise对象
const p = new Promise((resolve, reject) => {
  //引入 fs 莫模块
  const fs = require('fs')
  fs.readFile('./a.md', (err, data) => {
    resolve(data)
  })
})
p.then(value => {
  return new Promise((resolve, reject) => {
  fs.readFile('./b.md', (err, data) => {
    //这里的data为a.md value为b.md
    resolve([value, data])
  })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./c.md', (err, data) => {
      //这里的data为a.md+b.md
      //将这data 用push()方法压入value
      value.push(data)
      resolve(value)
    })
  })
}).then(value => {
  //打印出value 字符转义
  // console.log(value.toString());
  console.log(value.join('\r\n'));

})
