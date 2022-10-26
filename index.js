const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static(path.join(__dirname, '/public')))

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// routers
app.get("/", (req, res) => {
  res.render("index");
});

// Redirect to specific house
app.get('/a/:listing', (req, res) => {
  const { listing } = req.params;
  if(data){
      res.render('subreddit', { ...data });
  } else {
      res.render('notfound');
  }
})

// add new house
app.post('/listhouse', (req, res) => {
  console.log(req.body);
  res.redirect('/list');
})

app.get('/lists', (req, res) => {
  res.render('/');
})


// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
