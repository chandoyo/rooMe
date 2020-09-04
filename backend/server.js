const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

//require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Body parser middleware
 app.use(
  bodyParser.urlencoded({
  extended: false
})
);
app.use(bodyParser.json());

//const uri = process.env.ATLAS_URI;
const db = require("./keys").mongoURI;

// From previous
/*
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
*/

// New
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



const profileRouter = require('./routes/profile');
const usersRouter = require('./routes/users');

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./passport")(passport);


app.use('/profile', profileRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});