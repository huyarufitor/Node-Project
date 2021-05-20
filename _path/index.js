const path = require('path');
console.log('path',path);

//  常用 (1)path.join([...paths])方法用于连接路径
//  (2)path.resolve() 用于将相对路径转为绝对路径
//  (3)path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束
const v = path.join('foo','bar');
console.log('v:',v);//    foo/bar
const a= path.resolve('/fs_system/direc_files', 'index.js');
 console.log(a);
 const pathItem = a.split(path.sep);
 console.log(pathItem);
 const c = path.extname('index.htm');
 console.log('c:',c);

