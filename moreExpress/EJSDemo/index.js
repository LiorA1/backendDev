var express = require("express");
var app = express();
// var app = require("express")();


// Routes -

app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1> Welcome to the home page</h1>");
});

app.get("/cute/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send(" you the cuteest " + thing);
    res.render("cute.ejs", {thingVar: thing});
});



app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("server is listening...");
    
});