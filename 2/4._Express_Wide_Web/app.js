const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
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



app.get("/candle", (req, res) => {
    if (req.query.blow){
        return res.send({lightsOn: false})
    }else
    res.send({lightsOn : true})
})

app.get("/catfatcts", (req, res) => {
    res.sendFile(__dirname + "/public/catfacts.html");
})

const port = process.env.PORT || 8080;
console.log(null || 2)


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});