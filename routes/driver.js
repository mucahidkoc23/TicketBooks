const { driverService } = require("../services");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const drivers = await driverService.load();
  // res.send(flatted.stringify(drivers));
  res.render(`drivers`, { drivers });
});

router.post("/", async (req, res) => {
  const driver = await driverService.insert(req.body);
  res.send(driver);
});

router.delete("/:driverId", async (req, res) => {
  await driverService.removeBy("_id", req.params.driverId);
  res.send("driver removed");
});

router.get("/:driverId", async (req, res) => {
  const driver = await driverService.find(req.params.driverId);
  if (!driver) return res.status(404).send("driver not found");
  res.render(`driver`, { driver });
});

router.patch("/:driverId", async (req, res) => {
  const { driverId } = req.params;
  const { name } = req.body;
  await driverService.update(driverId, { name });
});

module.exports = router;

