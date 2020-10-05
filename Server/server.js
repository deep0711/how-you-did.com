const express=require('express');
const app=express();
const connection=require('./connection');
const Post=require('./routes/route');
const cors = require('cors');
const fileupload =require('express-fileupload'); 
require('dotenv').config();
path=require('path');


app.use(fileupload());
app.set('views', __dirname + '/views');
app.use(cors());
app.use(express.urlencoded()); 
app.use(express.json());
app.use('/post',Post);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8000);
  