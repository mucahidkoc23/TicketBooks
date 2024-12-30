const Booking = require("./booking");

class Passanger {
  constructor(name, location, bookings = []) {
    this.name = name;
    this.location = location;
    this.bookings = bookings;
  }
  book(driver, destination, origin) {
    const booking = new Booking(driver, this, origin, destination);
    this.bookings.push(booking);
    return booking;
  }
  static create({ name, location, bookings }) {
    return new Passanger(name, location, bookings);
  }
}

module.exports = Passanger;
