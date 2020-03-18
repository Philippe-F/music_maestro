const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  venue: {
  // venue association 
    type: Schema.Types.ObjectId,
    ref: "Venue"
  },
  artist: {
  // artist association 
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  event: {
  // event association 
    type: Schema.Types.ObjectId,
    ref: "Event"
  },
  follows: {
  // user follows oobject 
    venues: [],
    artists: []
  },
  favorites: {
  // user favorite object 
    events: []
  },
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("User", UserSchema);