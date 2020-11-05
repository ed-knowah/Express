const app = require("express")();
const PORT = 1000;


app.get("/", (req,res) =>{

    res.send("welcome to my homepage!!!!!!")
});


app.post("/post", (req,res) => {
    res.send("THIS ROUTE EXITS")

});

app.put("/put", (req,res) => {
    res.send("THIS ROUTE EXITS")
});

app.delete("/delete", (req,res) => {
    res.send("THIS ROUTE EXITS")
});

app.get("*", (req, res) => {
    res.send("YOU ARE NOT ALLOWED HERE..... PLEASE FIND YOUR WAY OUT");
})


app.listen(PORT, ()=>{
    console.log("APP IS RUNNING...")
})


