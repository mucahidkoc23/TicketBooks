const BaseDatabase = require("./base-database");
const Driver = require("../models/driver");

class DriverDatabase extends BaseDatabase {
  async findByDriverName(name) {
    return await this.findBy("name", name);
  }

  async findByLocation(location) {
    return await this.findBy("location", location);
  }
}

module.exports = new DriverDatabase(Driver);
