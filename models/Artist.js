const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  user_follows: {
    users: [{type: Schema.Types.ObjectId, ref: "User"}]
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Artist = mongoose.model("Artist", ArtistSchema); 