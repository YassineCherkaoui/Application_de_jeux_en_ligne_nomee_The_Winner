const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


const port = process.env.PORT || 8081;
const logWinston = require('../Back-end/Winston')

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())




mongoose.connect('mongodb://localhost:27017/theWinnertest' , {
  useNewUrlParser: true
}).then(() => {
  logWinston.info("Successfully connected to the database");    
}).catch(err => {
  logWinston.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});




// import router 

const categoryRoute = require('./routes/category');
const questionRoute = require('./routes/question');
const usersRoute = require('./routes/users');
const adminsRoute = require('./routes/admin');

app.use('/category' ,categoryRoute);
app.use('/question' ,questionRoute);
app.use('/user' ,usersRoute);
app.use('/admin' ,adminsRoute);













app.get('/', (req, res) => {
  res.send('Welcome to The Winning')
})
























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})