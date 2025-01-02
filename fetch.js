const { passangerDatabase, driverDatabase } = require("./database");
const printBookingHistory = require("./lib/print-booking-history");

async function main() {
  const enes = await driverDatabase.findBy("name", "Enes");
  const mucahid = await passangerDatabase.findByName("Mucahid");

  mucahid.book(enes, "Trier", "Koln");
  passangerDatabase.update(mucahid);
  printBookingHistory(mucahid);
  // console.log(await passangerDatabase.findBy("location", "Berlin"));
}

main();
