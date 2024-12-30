const colors = require("colors");
const Passanger = require("./passenger");
const Driver = require("./driver");
const driverDatabase = require("./driver-database");
const passangerDatabase = require("./passanger-database");

const mucahid = new Passanger("Mucahid", "Trier");
const enes = new Driver("Enes", "University");

mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

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
  if(passanger.bookings.length === 0) {
    return console.log(`${colors.blue(passanger.name)} has no booking yet`);
  }
  passanger.bookings.forEach(printBooking);
}
passangerDatabase.save([mucahid]);
// db.save("passengers", [mucahid]);
// db.save("drivers", [enes]);
// const passengers = db.load("passengers");
// passengers.forEach(printBookingHistory);

// const betul = new Passanger("betül", "öz");

// db.insert("passengers", betul);
// db.remove('passengers', 1)
// const passengers = db.load("passengers");

// passengers.forEach(p => console.log(p.name));

// printBookingHistory(mucahid);

const mucahid2 = passangerDatabase.findByName("Mucahid");
mucahid2.book(enes, "TXL", "FXL");
// console.log(mucahid);
printBookingHistory(mucahid2);
// passengers.forEach(p => console.log(p.name));