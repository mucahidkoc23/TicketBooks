const Passanger = require("./models/passenger");
const Driver = require("./models/driver");
const passangerDatabase = require("./database/passanger-database");
const driverDatabase = require("./database/driver-database");
const printBookingHistory = require("./lib/print-booking-history");

const mucahid =Passanger.create({name: "Mucahid", location: "Berlin"});
const enes = Driver.create({name: "Enes", location: "Trier"});


mucahid.book(enes, "Berlin", "Trier");
mucahid.book(enes, "Koln", "Dusseldof");

passangerDatabase.save([mucahid]);
driverDatabase.save([mucahid]);

const betul = Passanger.create({name:"Betül", location:"Frankfurt"});

passangerDatabase.insert(betul);

const passengers = passangerDatabase.load();

passengers.forEach(printBookingHistory);



