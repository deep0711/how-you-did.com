const connection=require('../connection');

//For Schema of User and Blog table refer to connection.js 
var user=function(user){
    this.username=user.username;
    this.email=user.email;
    this.password=user.password;
};
var post = function(post) {
    this.username = post.username;
    this.tags = post.tags;
    this.title = post.title;
    this.body = post.body;
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
    connection.query("INSERT INTO BLOG (TITLE , TAGS , BODY , AUTHOR) VALUES (? , ? , ? , ?);" , [new_post.title , new_post.tags , new_post.body , new_post.username] , (err , res) => {
        if(err) result(err , null);
        else result(null , res.insertId);
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

user.update=function(username,password,result){

    connection.query("UPDATE user SET password=? where username=?",[password,username],(err,res)=>{
        if(err)
            result(err,null);
        else
            result(null,res);
    });
};

user.login=function(username,password,result){
    connection.query("Select * from user where username=? and password=?",[username,password],(err,res)=>{
        if(err)
            result(err,NULL);
        else
            result(null,res);
    });
};


module.exports = {user , post};