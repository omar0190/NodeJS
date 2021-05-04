var router = require("express").Router();
var nodemailer =  require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
     auth: {
            user: env.EMAIL,
            pass: env.PASSWORD
        }
    });


    router.post("/sent", (req, res) => {
        var mailOptions = {
            from: env.EMAIL,
            to: req.body.email,
            subject: req.body.subject,
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

        res.redirect("/contacts");
    });


module.exports = {
    router
}