const fs = require('fs');
// 同步打开 fs.open ;
// fs.read(fd, buffer, offset, length, position, callback)
// 异步打开 fs.openSync
// fs.openSync(path, flags[, mode])
fs.open('README.md','r+',function(err,fd){
    if(err){
        return console.error(err)
    }
    console.log('fd是:',fd);
    console.log('文件打开成功！');
})