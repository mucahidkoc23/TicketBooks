const BaseDatabase = require("./base-database");
const Passanger = require("../models/passenger");

class PassangerDatabase extends BaseDatabase {
  async findByName(name) {
    const objects = await this.load();
    return objects.find((o) => o.name == name);
  }
}

module.exports = new PassangerDatabase(Passanger);