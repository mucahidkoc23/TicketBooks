const Booking = require("./booking");
const uuid = require("uuid");

class Passanger {
  constructor(id = uuid.v4(), name, location, bookings = []) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.bookings = bookings;
  }
  book(driver, destination, origin) {
    const booking = new Booking(driver, this, origin, destination);
    this.bookings.push(booking);
    return booking;
  }
  static create({ id, name, location, bookings }) {
    return new Passanger(id, name, location, bookings);
  }
}

module.exports = Passanger;
