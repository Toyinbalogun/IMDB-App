// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home-page.html"))
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login-page.html"))
  });

  app.get('/conUser-register', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contri-user-sign-up.html"))
  });

  // app.get('/conUser-register', (req, res) => {
  //   res.res.sendFile(path.join(__dirname, "public/contri-user-sign-up.html"))
  // });

};
