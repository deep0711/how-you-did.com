require('dotenv').config();
const mod=require('../model/model');
const jwt = require('jsonwebtoken');

const user=mod.user;
const post=mod.post;



exports.create=function(req,res){
    
    const new_user=new user(req.body);
    
    user.create(new_user,(err,user)=>{
        if(err)
        {    
            res.send(err);
            
        }   
        else{
            
            res.json(user);
        }       
    });
};

exports.insert = function(req , res) {
    const new_post = new post(req.body);
    post.insert(new_post , (err , post) => {
        if(err) res.send(err);
        else{ 
            console.log("DOne");
            res.json(post);
        }    

    })
}


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

    user.update(req.body.prev_username,req.body.username,req.body.password,(err,user)=>{
        if(err)
            res.send(err);
        else
            res.send('Updated Successfully');
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
                console.log(user[0]);
                const payload={
                    id:user[0].username,
                    email:user[0].email
                };
                const token=jwt.sign(payload,process.env.JWT_KEY,{expiresIn:'60d'});
                const data={
                    token:token,
                    email:user[0].email
                }
                res.send(data);
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
        res.send(decoded);
    }
}

exports.gettag=function(req,res){
    
    user.gettag(req.body.tag,(err,post)=>{
        if(err)
            res.send(err);
        else
            res.json(post);    
    })
}

exports.image=function(req,res){
    if(!req.files)
        res.status(400).send('No file uploaded');

    var file=req.files.file;
    var filename=req.files.file.name;
    var address='C:\\Users\\deepa\\Documents\\React\\how-you-did.com\\src\\image\\'+req.body.username+filename;
    
    console.log(address);
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png' || file.mimetype=='image/gif'){
        file.mv(address,err=>{
            if(err)
            {
                console.log("Error Occured");
                res.status(500).send(err);
            }
            else
            {
                user.store_image(req.body.username,filename,(err,user)=>{
                    if(err)
                    {
                        res.status(500).send(err);
                    }
                    else
                    {
                        res.send('Updated Successfully');
                    }
                })
            }
        });
    }
}

exports.getimage=function(req,res){
    user.getimage(req.body.username,(err,path)=>{
        if(err)
            res.status(500).send(err);
        else
            res.send(path);    
    })
}

exports.like=function(req,res){
    
    user.like(req.body.id,req.body.username,(err,post)=>{
        console.log(post);
        if(err)
            res.status(500).send(err);
        else
            res.send('Liked');    
    })
}

exports.has_liked=function(req,res){
    user.has_liked(req.body.username,req.body.id,(err,post)=>{
        if(err)
            res.status(500).send(err);
        else
        {
            if(post.length===0)
                res.send('not_liked');
            else
                res.send('liked');    
        }    
    })
}