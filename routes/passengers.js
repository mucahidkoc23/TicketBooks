const { passangerDatabase, driverDatabase } = require("../database");
const flatted = require("flatted");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const passengers = await passangerDatabase.load();
  // res.send(flatted.stringify(passengers));
  res.render(`passengers`, { passengers });
});

router.post("/", async (req, res) => {
  const passenger = await passangerDatabase.insert(req.body);
  res.send(passenger);
});

router.delete("/:passengerId", async (req, res) => {
  await passangerDatabase.removeBy("_id", req.params.passengerId);
  res.send("Passenger removed");
});

router.get("/:passengerId", async (req, res) => {
  const passenger = await passangerDatabase.find(req.params.passengerId);
  if (!passenger) return res.status(404).send("Passenger not found");
  res.render(`passenger`, { passenger });
});

router.get("/:passengerId/bookings", async (req, res) => {
  const { driverId, origin, destination } = req.body;
  const { passengerId } = req.params;

  const passenger = await passangerDatabase.find(passengerId);
  const driver = await driverDatabase.find(driverId);

  passenger.book(driver, origin, destination);
  await passangerDatabase.update(passenger);
  res.send(flatted.stringify(passenger));
});

router.patch("/:passengerId", async (req, res) => {
  const { passengerId } = req.params;
  const { name } = req.body;
  await passangerDatabase.update(passengerId, { name });
});

module.exports = router;
