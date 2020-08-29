const mysql=require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kunal@1999",
    database: "BLOG",
    insecureAuth : true
  });

connection.connect((err)=>{
      if(!err)
        console.log("Connected!");
      else
        console.log("Connection failed due to:"+err);
  });

module.exports=connection;
