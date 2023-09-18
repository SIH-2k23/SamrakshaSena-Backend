const express = require('express');
const routes = express.Router();

const Verifytoken = require('../middlewares/verifyAuth');
const acessChats = require('../controllers/ChatControllers/accessChat');
const fetchChats = require('../controllers/ChatControllers/fetchChats');
const createGroupChat = require('../controllers/ChatControllers/createGroupChat');
const addToGroup = require('../controllers/ChatControllers/addToGroup');
const removeFromGroup = require('../controllers/ChatControllers/removeFromGroup.js');



//Post Requests
routes.post('/getChat',Verifytoken,acessChats);
routes.post('/createGroup',Verifytoken,createGroupChat);

//Get Requests
routes.get('/fetchUserChats',Verifytoken,fetchChats);

//put Requests
routes.put('/removeFromGroup',Verifytoken,removeFromGroup);
routes.put('/addToGroup',Verifytoken,addToGroup)

module.exports = routes;

