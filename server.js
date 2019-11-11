const express = require('express');
// const campus=require('./models/Campus')
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3002;
  
const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'campusgruv'
});

// connect to database
mc.connect();
app.listen(port);

console.log(`API server started on: http://localhost:${port}`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route

// //Fecthing for all
// var sql = "select * from  categories";
// mc.query(sql, function (err, result) {
//   if (err) throw err;
 
//   console.log("result==========>",result)
// });

// //fecth data name from id 
// var sql = "select name from  categories where id='1'";
// mc.query(sql, function (err, result) {
//   if (err) throw err;
 
//   console.log("result==========>",result)
// });

//
// var sql = "select id from  categories where name='Saifullah'";
// mc.query(sql, function (err, result) {
//   if (err) throw err;
 
//   console.log("result==========>",result)
// });

// var sql = "select * from  posts";
// mc.query(sql, function (err, result) {
//   if (err) throw err;
 
//   console.log("result==========>",result)
// });


// var sql = "select * from  posts where category_id = ?";
// mc.query(sql, [], function (err, result) {
//   if (err) throw err;
 
//   console.log("result==========>",result)
// });