const express = require("express");
const { passangerDatabase } = require("./database");
const flatted = require("flatted");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.set("view engine", "pug");

app.get("/passengers", async (req, res) => {
  const passengers = await passangerDatabase.load();
  // res.send(flatted.stringify(passengers));
  res.render(`passengers`, { passengers });
});

app.post("/passengers", async (req, res) => {
  const passenger = await passangerDatabase.insert(req.body);
  res.send(passenger);
});

app.delete("/passengers/:passengerId", async (req, res) => {
  await passangerDatabase.removeBy("id", req.params.passengerId);
  res.send("Passenger removed");
});

app.get("/passengers/:passengerId", async (req, res) => {
  const passenger = await passangerDatabase.find(req.params.passengerId);
  if (!passenger) return res.status(404).send("Passenger not found");
  res.render(`passenger`, { passenger });
});

app.get("/", (req, res) => {
  res.render(`index`);
});

app.listen(3000, () => {
  console.log("Started listening port 3000");
});
