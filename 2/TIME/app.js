const express = require("express")

const app = express();

app.get('/', (req, res) =>{ 
res.send({
    Informative: "Type the following to visit the individual brances localhost<port>/",
    Time: "/time",
    Day: "/day",
    Month: "month",
    Full: "To see everything at once visit /full"
})


})

app.get('/time', (req, res) =>{
    res.send("The time today is " + hours + ":" + minutes + ":" + + seconds )
})

app.get('/day', (req, res) => {
    res.send("The day today is " + days[day - 1])
})

app.get('/month', (req,res) => {
    res.send("The month as of today is " + months[month] )
})

app.get('/full', (req, res) => {
    res.send("The date today is " + days[day - 1] + " In the month of   " + months[month] + " in the year of " + year + 
    " And the time is " + hours + ":" + minutes + ":" + + seconds)
})

//Creating a date object from js
let date = new Date();
// The Time
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();


// console.log(hours + ":" + minutes + ":" + + seconds)

//The date-items
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//console.log(days[day -1])
//console.log(months[month])
//console.log
app.listen(8080)