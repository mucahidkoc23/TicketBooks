const BaseDatabase = require("./base-database");
const Passenger = require("../models/passenger");

class PassengerDatabase extends BaseDatabase {
  async findByName(name) {
    return this.findBy("name", name);
  }
}

module.exports = new PassengerDatabase(Passenger);