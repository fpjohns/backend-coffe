const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(require('./routes/drinks.route'))

mongoose.connect(
  'mongodb+srv://fpjohns:denni2010@cluster0.7omondk.mongodb.net/coffes?retryWrites=true&w=majority',
  (err) => {
    if (err) {
      console.log(err);
    }

    console.log("db connected");

    app.listen(port, () => {
      console.log("started");
    });
  }
);
 