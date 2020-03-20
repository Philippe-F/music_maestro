const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  follows: {
    venues: [{type: Schema.Types.ObjectId, ref: "Venue"}],
    artists: [{type: Schema.Types.ObjectId, ref: "Artist"}]
  },
  favorites: {
    events: [{type: Schema.Types.ObjectId, ref: "Event"}]
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