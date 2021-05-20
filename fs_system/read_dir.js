// node读取文件目录
// readdir 方法用于读取目录，返回一个所包含的文件和子目录的数组。但是不会自动遍历
// 异步读取  fs.readdir(path[,options],callback)
// 同步读取  fs.readdirSync(path[,options])
const fs = require('fs');
const path = require('path');
// 封装的一个同步读取文件目录的方法，深度优先+先序遍历算法。同步会比较简单写，异步需要用回调函数
function travelPath(dir, callback) {
    // 数组
    console.log(fs.readdirSync(dir));
    fs.readdirSync(dir).forEach(function (file) {
        //path.join() 方法会将所有给定的 path 片段连接到一起
        var pathname = path.join(dir, file)
        if (fs.statSync(pathname).isDirectory()) {
            // 获取pathname的路径详细信息。再判断其是不是文件夹目录，是就递归查找，继续调用travelPath()函数
            travelPath(pathname, callback)
        } else {
            // 是普通文件
            callback(pathname)
        }
    })
}

//调用遍历的函数，其中__dirname 是（node中）当前模块的目录名
travelPath(__dirname, function (pathname) {
    console.log('当前目录下的文件有:',pathname)
})
