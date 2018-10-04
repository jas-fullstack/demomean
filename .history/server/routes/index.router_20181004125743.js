const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlEmail = require('../controllers/email.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
//router.post('/sendmail',ctrlEmail.send_email);
module.exports = router;



