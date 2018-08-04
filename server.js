const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const database = require('./database').init();
const Shemas = require('./shemas');

app.use(function(req,res,next){
  req.models = req.models || Shemas.init(database);
  next();
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

routers.init(app);

database.authenticate()
.then(() => {
  console.log('Database open for businiess!!!');
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
})
.catch(err => console.log('Connection ERROR!', err));


/*
 * TODOs :
  * student
  * class
  * school
  * session
  * address
  * teacher
*/
