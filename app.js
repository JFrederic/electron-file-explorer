const fs = require('fs')
const path = require('path')


function displayFiles(){
    fs.readdir('./', function (err, files) {
    if (err) {
        throw err;
    }
    for(let file of files){
        let stats = fs.statSync(file)
        let filePath = path.extname(file)
        let fileSize = stats['size'] 
        document.getElementById('files').innerHTML += '<tr><td>' + file + '</td><td>' + filePath + '</td><td>' +  fileSize + ' ko' + '</td></tr>' 
        
    }
})
}


