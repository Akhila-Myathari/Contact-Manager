const express = require('express')
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler')
const {registerUser,loginUser,currentUser ,forgotPassword} = require('../controllers/userController')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/forgotPassword').post(forgotPassword);
router.get('/current',validateToken,currentUser)

module.exports = router;