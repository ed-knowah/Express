 const fs = require("fs");

fs.readFile("myFile", "utf8", (err, data) =>{
         if(err){
             console.log("error", err);
         }
         console.log(data);
     });
