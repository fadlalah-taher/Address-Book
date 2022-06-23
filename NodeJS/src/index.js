const {Router} = require('express');
const {register} = require('./controller/user');
const router = Router();


router.post('/register', register);
router.post('/login', login);

module.exports = router;