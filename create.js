const Passenger = require("./models/passenger");
const Driver = require("./models/driver");
const passengerService = require("./services/passenger-services");
const driverService = require("./services/driver-services");
const printBookingHistory = require("./lib/print-booking-history");

const mucahid = Passenger.create({ name: "Mucahid", location: "Berlin" });
const enes = Driver.create({ name: "Enes", location: "Trier" });

mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

async function main() {
  try {
    await passengerService.save([mucahid]);
    await driverService.save([enes]);

    const betul = Passenger.create({ name: "Betül", location: "Frankfurt" });

    await passengerService.insert(betul);
    setTimeout(async () => {
      const passengers = await passengerService.load();
      passengers.forEach(printBookingHistory);
    }, 1000);
  } catch (e) {
    return console.log(e);
  }
}

main();
