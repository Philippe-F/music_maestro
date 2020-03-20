const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  img: {
    type: String
  }
});

module.exports = Artist = mongoose.model("Artist", ArtistSchema); 