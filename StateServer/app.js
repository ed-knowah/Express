 const app = require("express")();
 const PORT = 2000;

 const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended:true}));
 const file = require('./state');
 console.log(file.state);

  // THIS IS THE HOME ROUTE
 app.get("/", (req,res) => {
     let stateArray = [];
    for(let i=0; i<file.state.length; i++){
       stateArray.push(Object.keys(file.state[i]))
    }
     res.json(stateArray);
 });

 // THIS IS THE POST ROUTE
app.post("/add", (req, res) =>{
    let item = req.body;
    file.state.push(item);
   //console.log(state);
    res.send("Successfully Posted " + JSON.stringify(file.state));
});

// THIS IS THE PUT ROUTE FOR UPDATING
app.put("/put", (req,res) =>{
    let supplied = req.body;
    for(let i=0; i<file.state.length; i++){
      if(JSON.stringify( Object.keys(supplied).toString().toUpperCase()) === JSON.stringify( Object.keys(file.state[i]).toString().toUpperCase())){
      
         file.state[i] = supplied;
      }
   }
   //console.log(file.state);
    res.json(file.state);
});

// THIS IS THE DELETE ROUTE FOR DELETING ITEMS
app.delete("/delete/:id", (req, res) => {
    let toBeDeleted = req.params.id;

    file.state.splice(toBeDeleted, 1);
    console.log(file.state);
    res.json(file.state);
    
});

app.get("*", (req, res) => {
   res.send("YOU ARE NOT ALLOWED HERE..... PLEASE FIND YOUR WAY OUT");
});



 app.listen(PORT, ()=>{
     console.log("APP IS RUNNING ON PORT " + PORT);
 })