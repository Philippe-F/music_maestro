const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

module.exports = Venue = mongoose.model("Venue", VenueSchema);