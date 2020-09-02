# how-you-did.com

Go to the Client Directory execute:
  npm install
Then Go to the Server Directory execute:
  npm install
  
Database:blog
Tables:\
1.user  => Create Table user(username varchar(100) Primary key,email varchar(100),password varchar(100),image varchar(500)
2.blog => Create Table blog(id int Primary key,title varchar(100),tags varchar(100),body varchar(3000),author varchar(100),date date,Likes int)
3.likedpost => Create Table likedpost(id int Primary key,user varchar(5000)

Tables will be Created automatically if do not exist
