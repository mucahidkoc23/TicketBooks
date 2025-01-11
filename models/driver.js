const moongose = require("mongoose");

const DriverSchmea = new moongose.Schema({
  name: String,
  location: String,
})

module.exports = moongose.model("Driver", DriverSchmea);
