const colors = require("colors");
const Passanger = require("./passenger");
const Driver = require("./driver")

const mucahid = new Passanger("Mucahid", "Trier");
const enes = new Driver("Enes", "University");

mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

function printBooking(booking) {
  console.log(
    `${colors.bgBlue(booking.passanger.name)} booked ${colors.blue(booking.driver.name)} wants to travel from ${colors.red(booking.origin)} to ${colors.red(booking.destination)}`
  );
}

function printBookingHistory(passanger) {
  passanger.bookings.forEach(printBooking);
}

printBookingHistory(mucahid);