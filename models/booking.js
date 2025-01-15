const moongose = require("mongoose");

const BookingSchmea = new moongose.Schema({
  driver: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Driver",
    autopopulate: { maxDepth: 1 },
  },
  passenger: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Passenger",
    autopopulate: { maxDepth: 1 },
  },
  origin: String,
  destination: String,
});

BookingSchmea.plugin(require("mongoose-autopopulate"));
module.exports = moongose.model("Booking", BookingSchmea);
