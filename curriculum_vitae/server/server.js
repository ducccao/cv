const express = require("express");
const path = require("path");
const app = express();
const user_router = require("./router/user");
const github_router = require("./router/github");
let log = console.log;

// make assests as public
const public_direction = express.static(path.join(__dirname, "assets"));
// middle ware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(public_direction);
app.use(user_router);
app.use(github_router);
// error route
app.get("*", (req, res) => {
  res.send("404 page not found");
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
  log("Server is up at ", port);
});

// const express = require("express");
// const app = express();
// const path = require("path");

// let log = console.log;

// // make assets as public
// const publicDir = express.static(path.join(__dirname, "assets"));

// log(publicDir);
// // middle ware
// app.use(publicDir);

// // app.get("*", (req, res) => {
// //   res.send("ok");
// // });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   log("Server is up at " + port);
// });
