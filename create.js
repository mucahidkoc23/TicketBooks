const Passanger = require("./models/passenger");
const Driver = require("./models/driver");
const passangerDatabase = require("./database/passanger-database");
const driverDatabase = require("./database/driver-database");
const printBookingHistory = require("./lib/print-booking-history");

const mucahid = Passanger.create({ name: "Mucahid", location: "Berlin" });
const enes = Driver.create({ name: "Enes", location: "Trier" });

mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

async function main() {
  try {
    await passangerDatabase.save([mucahid]);
    await driverDatabase.save([enes]);

    const betul = Passanger.create({ name: "Betül", location: "Frankfurt" });

    await passangerDatabase.insert(betul);
    setTimeout(async () => {
      const passengers = await passangerDatabase.load();
      passengers.forEach(printBookingHistory);
    }, 1000);
  } catch (e) {
    return console.log(e);
  }
}

main();
