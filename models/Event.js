const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artists: [{ type: Schema.Types.ObjectId, ref: "Artist"}],
  venue: {type: Schema.Types.ObjectId, ref: "Venue"},
  eventDate: {
    type: Date,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

EventSchema.index({ artist: "text", venue: "text", name: "text" })
module.exports = Event = mongoose.model("Event", EventSchema); 



