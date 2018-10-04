const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.send_email = (req, res, next) => {
    var send = require('gmail-send')({
        //var send = require('../index.js')({
          user: 'sanjeevkumar23424234@gmail.com',
          // user: credentials.user,                  // Your GMail account used to send emails
          pass: 'SanjeevK#@!',
          // pass: credentials.pass,                  // Application-specific password
          to:   'user@gmail.com',
          // to:   credentials.user,                  // Send to yourself
                                                   // you also may set array of recipients:
                                                   // [ 'user1@gmail.com', 'user2@gmail.com' ]
          // from:    credentials.user,            // from: by default equals to user
          // replyTo: credentials.user,            // replyTo: by default undefined
          // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
          subject: 'test subject',
          text:    'gmail-send example 1',         // Plain text
          //html:    '<b>html text</b>'            // HTML
        });
    res.send("test");
}

