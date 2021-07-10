const express = require("express");
const cors = require("cors");

const path = __dirname + '/dist/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// app.get('/', function (req,res) {
//   res.sendFile(path + "index.html");
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});