const colors = require("colors");
const Passanger = require("./passenger");
const Driver = require("./driver");
const { passangerDatabase, driverDatabase } = require("./database");

const mucahid =Passanger.create({name: "Mucahid", location: "Berlin"});
const enes = Driver.create({name: "Enes", location: "Trier"});

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
  if (passanger.bookings.length === 0) {
    return console.log(`${colors.blue(passanger.name)} has no booking yet`);
  }
  passanger.bookings.forEach(printBooking);
}

// passangerDatabase.save([mucahid]);
const passengers = passangerDatabase.load();
passengers.forEach(printBookingHistory);

// db.save("passengers", [mucahid]);
// db.save("drivers", [enes]);
// const passengers = db.load("passengers");

// const betul = new Passanger("betül", "öz");

// db.insert("passengers", betul);
// db.remove('passengers', 1)
// const passengers = db.load("passengers");

// passengers.forEach(p => console.log(p.name));

// printBookingHistory(mucahid);

// const mucahid = passangerDatabase.findByName("Mucahid");
// printBookingHistory(mucahid);
mucahid.book(enes, "Trier", "Koln");
passangerDatabase.update(mucahid);

// console.log(mucahid);
// passengers.forEach(p => console.log(p.name));
