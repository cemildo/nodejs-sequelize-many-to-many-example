const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const database = require('./database').init();
const shemas = require('./shemas').init(database);

app.use(function(req,res,next){
  // inject all the sequelize models into req object 
  // so that it will be available to all routes
  req.models = req.models || shemas;
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

routers.init(app);

// check if database connection exist then start the application
database.authenticate()
.then(() => {
  console.log('Database open for businiess!!!');
  app.listen(3000, () => console.log('Example app listening on port 3000!'));
})
.catch(err => console.log('Connection ERROR!', err)); 