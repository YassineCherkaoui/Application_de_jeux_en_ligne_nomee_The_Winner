const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const ejs = require('ejs');
const path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

const logger = require('./config/logger')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static('views'))
app.use(express.static(__dirname + 'views'));



mongoose.connect('mongodb://localhost:27017/the_winner', {
  useNewUrlParser: true
}).then(() => {
  logger.info("Successfully connected to the database");
}).catch(err => {
  logger.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});




// import router 

const categoryRoute = require('./routes/category');
const questionsRoute = require('./routes/question');

app.use('/category', categoryRoute);
app.use('/questions', questionsRoute);







// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})