const Passenger = require("./models/passenger");
const Driver = require("./models/driver");
const passengerDatabase = require("./database/passenger-database");
const driverDatabase = require("./database/driver-database");
const printBookingHistory = require("./lib/print-booking-history");

const mucahid = Passenger.create({ name: "Mucahid", location: "Berlin" });
const enes = Driver.create({ name: "Enes", location: "Trier" });

mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

async function main() {
  try {
    await passengerDatabase.save([mucahid]);
    await driverDatabase.save([enes]);

    const betul = Passenger.create({ name: "Betül", location: "Frankfurt" });

    await passengerDatabase.insert(betul);
    setTimeout(async () => {
      const passengers = await passengerDatabase.load();
      passengers.forEach(printBookingHistory);
    }, 1000);
  } catch (e) {
    return console.log(e);
  }
}

main();
