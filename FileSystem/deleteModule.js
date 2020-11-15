const fs = require('fs');


    fs.unlink("fileToBeDeleted.txt",(err) => {
        if (err){
            console.log("error", err)
        }
        console.log('File deleted!');
    }); 
     
