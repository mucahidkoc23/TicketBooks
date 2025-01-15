const moongose = require("mongoose");

const DriverSchmea = new moongose.Schema({
  name: String,
  age: { type: Number, required: true, min: 18 },
  location: String,
});

module.exports = moongose.model("Driver", DriverSchmea);
