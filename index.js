const passengersRouter = require("./routes/passengers");
const driverRouter = require("./routes/driver");
const indexRouter = require("./routes/index");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./mongo-connection");

app.use(bodyParser.json());
app.set("view engine", "pug");

app.use("/passengers", passengersRouter);
app.use("/drivers", driverRouter);

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Started listening port 3000");
});
