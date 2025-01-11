const { passengerService, driverService } = require("./services");
const printBookingHistory = require("./lib/print-booking-history");

async function main() {
  const enes = await driverService.findBy("name", "Enes");
  const mucahid = await passengerService.findByName("Mucahid");

  mucahid.book(enes, "Trier", "Koln");
  passengerService.update(mucahid);
  printBookingHistory(mucahid);
  // console.log(await passengerService.findBy("location", "Berlin"));
}

main();
