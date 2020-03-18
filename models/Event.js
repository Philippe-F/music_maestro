const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  user_favorites: {
    users: []
  },
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model("Event", EventSchema); 