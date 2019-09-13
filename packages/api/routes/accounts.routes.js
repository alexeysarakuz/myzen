const express = require('express');
const router = express.Router();

// Controllers
const AccountsController = require('../controllers/accounts.controller');

router.post('/login', AccountsController.login);

module.exports = router;
