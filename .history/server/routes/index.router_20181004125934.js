const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlEmail = require('../controllers/email.controller');

const jwtHelper = require('../config/jwtHelper');

module.exports = router;



