const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user_favorites: {
    users: [{type: Schema.Types.ObjectId, ref: "User"}]
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
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = Event = mongoose.model("Event", EventSchema); 