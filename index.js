const { passangerDatabase, driverDatabase } = require("./database");
const printBookingHistory = require("./lib/print-booking-history");

const enes = driverDatabase.findBy('name','Enes');
const mucahid = passangerDatabase.findByName('Mucahid');
passengers.forEach(printBookingHistory);

mucahid.book(enes, "Trier", "Koln");
passangerDatabase.update(mucahid);
printBookingHistory(mucahid);
console.log(passangerDatabase.findBy("location","Mucahid")); 

