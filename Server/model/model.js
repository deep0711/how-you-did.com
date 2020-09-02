const connection=require('../connection');

//For Schema of User and Blog table refer to connection.js 
var user=function(user){
    this.username=user.username;
    this.email=user.email;
    this.password=user.password;
};

var post = function(post) {
    this.id=post.id;
    this.author = post.author;
    this.tags = post.tags;
    this.title = post.title;
    this.body = post.body;
    this.date=post.date;
    this.Likes=post.Likes;
}

user.create=function(new_user,result){
    connection.query("INSERT INTO user set ?",new_user,(err,res)=>{

        if(err)
            result(err,null);
        else
            result(null,res.insertId);
    });
};

post.insert = function(new_post , result) {
    connection.query("INSERT INTO blog set ?" , new_post , (err , res) => {
        if(err) 
            result(err , null);
        else 
        {   console.log("Data Inserted !!"); 
            result(null , res.insertId);
        }    
    })
}

user.search=function(username,result){
    connection.query("SELECT * from blog where id=?",username,(err,res)=>{

        if(err)
            result(err,null);
        else
            result(null,res);
    });
};

user.showall=function(result){
    connection.query("SELECT * from blog",(err,res)=>{
        if(err)
        {    result(err,null);
        }
        else
            result(null,res);
    })
}

user.delete=function(username,result){
    connection.query("DELETE from user where username=?",username,(err,res)=>{
        if(err)
            result(err,null);
        else
            result(null,res);
    });
};

user.update=function(prev_username,username,password,result){

    if(username)
    {
        connection.query("UPDATE user SET username=? where username=?",[username,prev_username],(err,res)=>{
            if(err)
                result(err,null);
            else
                result(null,res);
        });
    } 
    else
    {
        connection.query("UPDATE user SET password=? where username=?",[password,prev_username],(err,res)=>{
            if(err)
                result(err,null);
            else
                result(null,res);
        });
    }   
};

user.login=function(username,password,result){
    connection.query("Select * from user where username=? and password=?",[username,password],(err,res)=>{
        if(err)
            result(err,NULL);
        else
            result(null,res);
    });
};

user.gettag=function(tag,result){
    connection.query("Select * from blog where tags like ?",tag,(err,res)=>{
        if(err)
            result(err,null);
        else
            result(null,res);    
    });
}

user.store_image=function(username,address,result){
    connection.query("Update user SET image=? where username=?",[address,username],(err,res)=>{
        if(err)
            result(err,null);
        else
            result(null,res);    
    })
}

user.getimage=function(username,result){
    connection.query("SELECT image from user where username=?",username,(err,res)=>{
        if(err)
            result(err,null);
        else
            result(null,res);    
    })
}

user.like=function(id,username,result){
    
    connection.query("Update blog SET Likes=Likes+1 where id=?",id,(err,res)=>{
        if(err)
            result(err,null);
        else
        {
            console.log("Hello")
            connection.query("SELECT * from likedpost where id=?",id,(err,res)=>{

                if(err)
                    result(err,NULL);
                else
                {    
                    if(res.length===0)
                    {
                        console.log('No data');

                        connection.query("Insert into likedpost(id,user) VALUES (?,?)",[id,username],(err,res)=>{
                            if(err)
                            {
                                console.log('Error occured',err);    
                                result(err,null);
                            }    
                        })
                    }   
                    else{    
                    connection.query("Update likedpost SET user=CONCAT(user,?) where id=?",[username,id],(err,res)=>{
                        if(err)
                            result(err,null);
                        else    
                            result(null,res);
                    })
                    }
                }               
            })
        }
    })
}    

user.has_liked=function(username,id,result){
    console.log(username)
    connection.query("SELECT * from likedpost where id=? and user like ?",[id,username],(err,res)=>{
        if(err)
        {
            result(err,null);
        }
        else
        {
            result(null,res);
        }
    })
}

module.exports={user,post};