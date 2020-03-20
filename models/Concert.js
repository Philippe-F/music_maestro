const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConcertSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

ConcertSchema.index({ artist: "text", venue: "text", name: "text" })

module.exports = Concert = mongoose.model("Concert", ConcertSchema);
