// Import the passport package.
const passport = require("passport");
// Import the passport-local package and create a new authentication strategy.
const LocalStrategy = require("passport-local").Strategy;
// Load our Mongoose DB models.
const db = require("../models");

// Let passport know that we'll be using a new Local Strategy for our authentication.
passport.use(new LocalStrategy({
  usernameField: "email", // Tells passport that our "username" is actually an email.
  passwordField: "password"
},
  function (email, password, cb) {
    // We use our DB models, specifically the User one and try to find a user that matches the email provided by the client.
    return db.User.findOne({ email })
      .then(user => {
        // If we can't find the user, or the provided password is incorrect, we return an error message.
        if (!user || !user.login(password)) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        // Otherwise the user login credentials are correct, and we return a success message.
        return cb(null, user, { message: "Logged In Successfully" });
      })
      .catch(err => cb(err));
  }
));