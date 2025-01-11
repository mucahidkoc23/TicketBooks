const moongose = require("mongoose");

const PassengerSchmea = new moongose.Schema({
  name: String,
  location: String,
  bookings: []
})

module.exports = moongose.model("Passenger", PassengerSchmea);
