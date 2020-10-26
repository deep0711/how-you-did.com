const mysql=require('mysql')

var connection = mysql.createConnection({
    
    //Change these Parameter according to yours
    host: "how-you-did.mysql.database.azure.com",
    //host:"localhost",
    user: "myadmin@how-you-did",
    //user:"root",
    password: "ABCabc123@",
    database: "BLOG",
    port:"3306",
    ssl:true
  });

connection.connect((err)=>{
      if(!err)
        console.log("Connected!");
      else
        console.log("Connection failed due to:"+err);
  });

connection.query("SELECT * from user",(err,res)=>{
    if(!res)
    {
        connection.query("Create Table user(username varchar(100) Primary key,email varchar(100),password varchar(100),image varchar(500))",(err,res)=>{
          if(err)
            console.log('Table not Created',err);
          else
            console.log('Table Created Successfully');  
        })
        //Now add user by registering on the website
    }
    else
      console.log('User Table already there');
})

connection.query("SELECT * from blog",(err,res)=>{
  if(!res)
  {
      connection.query("Create Table blog(id int Primary key,title varchar(1000),tags varchar(1000),body varchar(10000),author varchar(100),date date,Likes int Default 0)",(err,res)=>{
        if(err)
          console.log('Table not Created',err);
        else
          console.log(' Table Created Successfully');  
      })
      /*
      connection.query("Insert into blog values(1,'C++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19',0)");
      connection.query("Insert into blog values(2,'D++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19',0)");
      connection.query("Insert into blog values(3,'E++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19',0)");
      connection.query("Insert into blog values(4,'F++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19',0)");
      connection.query("Insert into blog values(5,'G++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19',0)");
      */
  }
  else
    console.log('Blog Table already there');
})

connection.query("SELECT * from likedpost",(err,res)=>{
  if(!res)
  {
      connection.query("Create Table likedpost(id int Primary key,user varchar(5000))",(err,res)=>{
        if(err)
          console.log('Table not Created',err);
        else
          console.log(' Table Created Successfully');  
      })
  }
  else
    console.log('Likes Table already there');
})
module.exports=connection;
