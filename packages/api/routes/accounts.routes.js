const express = require('express');
const router = express.Router();

// Controllers
const AccountsController = require('../controllers/accounts.controller');

router.post('/login', AccountsController.login);
router.post('/register', AccountsController.register);

module.exports = router;
