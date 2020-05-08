const express = require("express");
const app = express();
const path = require("path");

let log = console.log;

// make assets as public
const publicDir = express.static(path.join(__dirname, "assets"));

log(publicDir);
// middle ware
app.use(publicDir);

// app.get("*", (req, res) => {
//   res.send("ok");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  log("Server is up at " + port);
});
