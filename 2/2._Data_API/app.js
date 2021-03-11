const express = require("express")
const app = express()


//Path parameter

//Create a route called search that returns an empty JSON

app.get("/search", (req, res) => {
    console.log(req.query)
    res.send(req.query)
});

//Path variable - /: is dynamic content
app.get("/telegram/:message/:name", (req, res) => {
    const message = req.params.name + ", " +  req.params.message;
    res.send({ message: message })
})

const wine = require("/.wine.json")
console.log(wine)




app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
})



app.listen(8080)
