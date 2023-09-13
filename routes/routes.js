const express = require('express');
const route = express.Router();

const Register = require('../controllers/Register');
const Login = require('../controllers/Login');
const Verifytoken = require('../middlewares/verifyAuth');
const Logout = require('../controllers/Logout');
const refreshToken = require('../middlewares/refreshToken');


//Post Requests
route.post('/register',Register);
route.post('/login',Login);
route.post('/logout',Verifytoken,Logout);

// //Get Requests
// route.get('/adminInfo',Verifytoken,getAdmin);
//route.get('/refreshToken',refreshToken,Verifytoken,getAdmin);


module.exports = route ;