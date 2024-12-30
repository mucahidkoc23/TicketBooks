const BaseDatabase = require("./base-database");
const Passanger = require("./passenger");

class PassangerDatabase extends BaseDatabase {
  findByName(name) {
    const objects = this.load();
    return objects.find((o) => o.name == name);
  }
}

module.exports = new PassangerDatabase(Passanger);