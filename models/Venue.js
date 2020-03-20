const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
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
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Venue = mongoose.model("Venue", VenueSchema);