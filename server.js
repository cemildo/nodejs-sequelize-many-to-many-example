const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const database = require('./database');

// const connection = database.init();
app.use(database.init)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
  
require("./routers/students.js")(app);
require("./routers/classes.js")(app);
require("./routers/enrollments.js")(app);
 
app.listen(3000, () => console.log('Example app listening on port 3000!'));


/**
 * TODOs : 
 * student 
 * class
 * school
 * session
 * address
 * teacher
 * 
 * 
 * 
 */