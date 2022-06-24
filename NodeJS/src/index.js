const {Router} = require('express');
const {register, login} = require('./controller/user');
const {addContacts, getContacts} = require('./controller/contact');
const router = Router();


router.post('/register', register);
router.post('/login', login);
router.post('/addContacts', addContacts);
router.post('/getContacts', getContacts);

module.exports = router;