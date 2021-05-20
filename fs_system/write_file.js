const fs = require('fs');
// fs.writeFile(file, data[, options], callback)
fs.writeFile('README.md','i am so sleepy girl and i will be a node export!',{flag:'a+'},(err)=>{
    if(err) throw err
    console.log('It\'s saved!');

})