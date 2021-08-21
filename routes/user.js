const express = require('express');
const router = express.Router();
const user = require('./../controllers/user');

router.post('/register',user);

router.post('/login',user);
router.post('/logout',user);

module.exports = router;