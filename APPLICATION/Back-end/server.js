const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const logger = require('./app/config/logger.js')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
const categorie = require('./app/models/categorie.model.js');
const question = require('./app/models/Question.model.js');
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// const Role = db.role;

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/the_winner' , {
  useUnifiedTopology: true, 
  useNewUrlParser: true, 
  useCreateIndex: true
})
    .then(async () => {
      console.log("Successfully connected to the database"); 
      }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
  });



// trying get methode 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The Winning." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require('./app/routes/categorie.router.js')(app);
require('./app/routes/Question.router.js')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }
