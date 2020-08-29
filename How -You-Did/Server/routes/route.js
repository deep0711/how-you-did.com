const express=require('express');
const Router=express.Router();
const mysql=require('mysql');
const connection=require('../connection');
const user_controller=require('../controller/controller');

Router.get('/',user_controller.showall);
Router.post('/',user_controller.create);
Router.post('/search',user_controller.search);
Router.post('/delete',user_controller.delete);
Router.post('/update',user_controller.update);
Router.post('/login',user_controller.login);
Router.post('/gettoken',user_controller.gettoken);
Router.get('/getuser',user_controller.getuser);
module.exports=Router;







