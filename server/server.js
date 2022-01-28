const path = require("path");
const express = require("express");
const http = require("http");
const cors = require('cors');

const routes = require('./routes');

const app = express();

const port = process.env.PORT || 8080; 

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is running on port ${port}`)
})