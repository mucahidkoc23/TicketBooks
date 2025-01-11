const { passengerDatabase, driverDatabase } = require("./database");
const printBookingHistory = require("./lib/print-booking-history");

async function main() {
  const enes = await driverDatabase.findBy("name", "Enes");
  const mucahid = await passengerDatabase.findByName("Mucahid");

  mucahid.book(enes, "Trier", "Koln");
  passengerDatabase.update(mucahid);
  printBookingHistory(mucahid);
  // console.log(await passengerDatabase.findBy("location", "Berlin"));
}

main();
