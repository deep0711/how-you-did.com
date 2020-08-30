const mysql=require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ABCabc123@",
    database: "BLOG",
    insecureAuth : true
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
        connection.query("Create Table user(username varchar(100) Primary key,email varchar(100),password varchar(100)",(err,res)=>{
          if(err)
            console.log('Table not Created');
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
      connection.query("Create Table blog(id int Primary key,title varchar(100),tags varchar(100),body varchar(3000),author varchar(100),date date)",(err,res)=>{
        if(err)
          console.log('Table not Created');
        else
          console.log(' Table Created Successfully');  
      })

      connection.query("Insert into blog values(1,'C++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19')");
      connection.query("Insert into blog values(2,'D++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19')");
      connection.query("Insert into blog values(3,'E++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19')");
      connection.query("Insert into blog values(4,'F++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19')");
      connection.query("Insert into blog values(5,'G++','#C++ #tech','C++ is a modern Programming Language','Kunal Khanra','2019-01-19')");
  }
  else
    console.log('Blog Table already there');
})

module.exports=connection;
