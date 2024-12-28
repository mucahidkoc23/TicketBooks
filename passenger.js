const Booking = require("./booking");

class Passanger {
  constructor(name, location) {
    this.name = name;
    this.bookings = [];
    this.location = location;
  }
  book(driver, destination, origin) {
    const booking = new Booking(driver, this, origin, destination);
    this.bookings.push(booking);
    return booking;
  }
}

module.exports = Passanger;