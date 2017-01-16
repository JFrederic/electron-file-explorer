const fs = require('fs')


function displayFiles(){
    fs.readdir('./tmp', function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files)
    document.getElementById('files').innerHTML = files
})
}


