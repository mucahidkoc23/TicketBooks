const colors = require("colors");


function printBooking(booking) {
  console.log(
    `${colors.bgBlue(booking.passanger.name)} booked ${colors.blue(
      booking.driver.name
    )} wants to travel from ${colors.red(booking.origin)} to ${colors.red(
      booking.destination
    )}`
  );
}

function printBookingHistory(passanger) {
  if (passanger.bookings.length === 0) {
    return console.log(`${colors.blue(passanger.name)} has no booking yet`);
  }
  passanger.bookings.forEach(printBooking);
}

module.exports = printBookingHistory;