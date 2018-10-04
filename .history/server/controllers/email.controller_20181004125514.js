const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.send_email = (req, res, next) => {
    console.log("darfa");
    res.send("test");
    /*
    var send = require('gmail-send')({
    //var send = require('../index.js')({
        user: 'sanjeevkumar23424234@gmail.com',
        // user: credentials.user,                  // Your GMail account used to send emails
        pass: 'SanjeevK#@!',
        // pass: credentials.pass,                  // Application-specific password
        to:   'kumarsanju54@gmail.com',
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
*/
    /*
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
    */
}

