const express = require('express');
const router = express.Router()

const { register, login, prevLogin, getUser } =  require('../controllers/user.controller');

router.post('/register', register);
router.post('/login', login);
router.post('/prev-login', prevLogin);
router.get('/', getUser);



module.exports = router;