const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizzaparlor.html");
})

app.get("/whiskey", (req,res) => {
    res.send({barkeep: "Here ya go, pal. A wishkey for you."})
})

app.get("/pub", (req, res) =>{
    if(Number(req.query.money) > 500) {
        res.redirect("/whiskey")
    }else{
        res.send({doorman: "Sorry not enough monii"})
    }

    res.redirect("/whiskey")
})

//const port = process.env.port
//console.log(process.env.port);

const port = process.env.PORT || 8080;
console.log(null || 2)


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});