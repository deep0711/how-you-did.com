const express=require('express');
const app=express();
const connection=require('./connection');
const Post=require('./routes/route');
const cors = require('cors');
const fileupload =require('express-fileupload'); 
require('dotenv').config();
path=require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.use(fileupload());
app.set('views', __dirname + '/views');
app.use(cors());
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use('/post',Post);
app.use('/tags/post',Post);
app.use('/post/post',Post);

app.set('view engine', 'ejs');
const port = process.env.PORT || 8000;

app.listen(port);
  