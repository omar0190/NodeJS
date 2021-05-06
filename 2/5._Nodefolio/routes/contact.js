var router = require("express").Router();
var nodemailer = require("nodemailer");
require('dotenv').config()


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


router.post("/sent", (req, res) => {

  
    // sender til mig
    var mailOptions = {
        from: 'testeskea@gmail.com',
        to: 'omar.iatik@gmail.com',
        subject: "Emne: " + req.body.subject + ", " + "Afsender: " + req.body.name,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    });
    

    // sender bekræftelse til personen

    var mailOptions = {
        from: 'Akhtar29dk@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: 'Tak for din mail \n\nJeg vender hurtigst muligt tilbage til dig \n\nRigtig god dag :-)'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    
    });

    res.redirect("/#contact");
});


module.exports = {
    router
};