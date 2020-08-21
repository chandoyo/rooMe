import { Messages } from '../src/components/messages.component';
const express = require('express');
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require('dotenv').config();

const server = require("http").createServer(app);
const io = require("socket.io")(server);
const config = require("./config/key");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const profileRouter = require('./routes/profile');
const usersRouter = require('./routes/users');


app.use('/profile', profileRouter);
app.use('/users', usersRouter);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());
const { Messages } = require("./models/message.model");
// app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
/*const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);*/

io.on("connection", socket => {

  socket.on("Input Chat Message", msg => {

    connection.then(db => {
      try {
          let message = new Messages({ message: msg.chatMessage, sender:msg.userID, type: msg.type })

          message.save((err, doc) => {
            if(err) return res.json({ success: false, err })

            Messages.find({ "_id": doc._id })
            .populate("sender")
            .exec((err, doc)=> {

                return io.emit("Output Chat Message", doc);
            })
          })
      } catch (error) {
        console.error(error);
      }
    })
   })

})