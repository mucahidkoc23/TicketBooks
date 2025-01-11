const moongose = require("mongoose");
const Booking = require("./booking");

const PassengerSchmea = new moongose.Schema({
  name: String,
  location: String,
  bookings: [],
});

PassengerSchmea.methods.book = async function (driver, origin, destination) {
  const booking = await Booking.create({driver, passenger:this, origin, destination});
  this.bookings.push(booking._id);
  this.save();
  return booking;
};

module.exports = moongose.model("Passenger", PassengerSchmea);
