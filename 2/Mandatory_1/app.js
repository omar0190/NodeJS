const express = require("express");
const app = express();

app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home/index.html");
});

app.get("/terminal", (req, res) => {
    res.sendFile(__dirname + "/public/terminal/terminal.html");
});

app.get("/snippets", (req, res) => {
    res.sendFile(__dirname + "/public/snippets/snippets.html");
});

app.get("/urlanatomy", (req, res) => {
    res.sendFile(__dirname + "/public/urlanatomy/urlanatomy.html");
});

// Envirionment Variable
const port = process.env.PORT || 8080;
console.log(null || 2)


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});