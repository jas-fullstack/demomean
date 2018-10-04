const mongoose = require('mongoose');
const passport = require('passport');
var nodemailer = require('nodemailer');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.send_email = (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sanjeevkumar23424234@gmail.com',
          pass: 'SanjeevK#@!'
        }
      });
      
      var mailOptions = {
        from: 'sanjeevkumar23424234@gmail.com',
        to: 'sanjeevkumar23424234@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

