const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  user_follows: {
    users: []
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Artist = mongoose.model("Artist", ArtistSchema); 