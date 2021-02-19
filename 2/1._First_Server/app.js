const express = require("express")

const app = express();
//const app = require(express)();

app.get('/', (req, res) => {
    res.send({

    })
})

app.get('/me', (req, res) => {
    res.send({
        "firstName": "Omar",
        "lastName": "Atik",
        "age": 22
    })
})

app.listen(8080);
console.log("Server running on PORT 8080")