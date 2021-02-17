const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send ({message: "First call to /"});
});

app.get("/anotherpath/id", (req, res) => {
    res.send({data: "some other things"});
});

app.listen(8080);

