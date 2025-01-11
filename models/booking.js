const moongose = require("mongoose");

const BookingSchmea = new moongose.Schema({
  driver: {},
  passenger: {},
  origin: String,
  destination: String,
})

module.exports = moongose.model("Booking", BookingSchmea);
