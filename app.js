const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users"); 
const bodyParser = require("body-parser"); 
const passport = require("passport");
const search = require('./routes/api/events');
require('./models')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/potato", (req, res) => {
  res.send("hello potato")
})

app.use("/api/users", users);
<<<<<<< Updated upstream
app.use("/", search);
=======
app.get("/events", users);
app.get("/search", search);
>>>>>>> Stashed changes

app.use(passport.initialize());
require("./config/passport")(passport);
// app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));