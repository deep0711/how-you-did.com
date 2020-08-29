require('dotenv').config();
const user=require('../model/model');
const jwt = require('jsonwebtoken');
const passport = require('passport');


exports.create=function(req,res){
    
    const new_user=new user(req.body);
    
    user.create(new_user,(err,user)=>{
        if(err)
            res.send(err);
        else
            res.json(user);   
    });
};

exports.search=function(req,res){
    
    user.search(req.body.username,(err,user)=>{
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};

exports.showall=function(req,res){
    
    user.showall((err,user)=>{
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};

exports.delete=function(req,res){
    
    user.delete(req.body.username,(err,user)=>{
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};    

exports.update=function(req,res){
    
    user.update(req.body.username,req.body.password,(err,user)=>{
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};

exports.login=function(req,res){

    user.login(req.body.username,req.body.password,(err,user)=>{
        if(err)
            res.send(err);
        else
        {    
            if(user.length==1)
                res.send('True');
            else
                res.send('False');    
        }
    });
};

exports.gettoken=function(req,res){
    
    user.login(req.body.username,req.body.password,(err,user)=>{
        
        if(err)
            res.send(null);
        else
        {
            if(user.length===1)
            {
                const payload={id:user[0].username};
                const token=jwt.sign(payload,process.env.JWT_KEY);
                res.send(token);
            }
            else
                res.send(null);
                
        }
    })
}

exports.getuser=function(req,res){
    
    if (req.headers && req.headers.authorization) {
        
        var authorization = req.headers.authorization.split(' ')[1],decoded;
        
        try {
            decoded = jwt.verify(authorization,process.env.JWT_KEY );
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        res.send(decoded.id);
    }
}