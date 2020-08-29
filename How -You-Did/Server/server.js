const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const connection=require('./connection');
const Post=require('./routes/route');
const cors = require('cors');
require('dotenv').config();


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json());
app.use('/post',Post);
app.set('view engine', 'ejs');
app.listen(8000);
  