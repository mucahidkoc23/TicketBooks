const moongose = require("mongoose");

const PassengerSchmea = new moongose.Schema({
  name: String,
  location: String,
  bookings: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: "Booking",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

PassengerSchmea.plugin(require("mongoose-autopopulate"));
module.exports = moongose.model("Passenger", PassengerSchmea);
