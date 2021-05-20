const fs =require('fs');

/* 读取文件
* fs.read(fd, buffer, offset, length, position, callback)
* @fd - 通过 fs.open() 方法返回的文件描述符
* @buffer - 是数据将被写入到的 buffer
.可以查阅https://www.runoob.com/nodejs/nodejs-buffer.html
在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
(node:85389) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead
* @offset - 是 buffer 中开始写入的偏移量
* @length - 是一个整数，指定要读取的字节数
* @position - 是一个整数，指定从文件中开始读取的位置。 如果 position 为 null，则数据从当前文件位置开始读取
* @callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象*/
// let buf = new Buffer(1024);
let buf = new Buffer.alloc(1024);//设置一个1Kb的Buffer
fs.open('README.md','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes+' 字节被读取');
        //仅输出读取的字节
        if(bytes>0){
            // console.log(buf.slice(0,bytes));
            console.log(buf.slice(0,bytes).toString());
        }
    })
})