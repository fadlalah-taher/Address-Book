const {Router} = require('express');
const {register, login, get} = require('./controller/user');
const {addContacts, getContacts, deleteContact, updateContact, getContactsByUserId, getContactById} = require('./controller/contact');
const router = Router();


router.post('/register', register);
router.post('/login', login);
router.post('/get', get);
router.post('/addContacts', addContacts);
router.post('/getContacts', getContacts);
router.post('/deleteContact', deleteContact);
router.post('/updateContact', updateContact);
router.post('/getContactsByUserId', getContactsByUserId);
router.post('/getContactById', getContactById);

module.exports = router;