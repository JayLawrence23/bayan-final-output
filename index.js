const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static(path.join(__dirname, '/public')))
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  res.render("index");
});

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
