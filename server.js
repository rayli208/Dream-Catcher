const express = require('express');
const session = require('express-session');
const passport = require("./middleware/passport-local");
const listEndpoints = require('express-list-endpoints');
const routes = require("./routes");
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port %s. Visit http://localhost:${PORT}/ in your browser.`);
    console.log(listEndpoints(app));
  });
});